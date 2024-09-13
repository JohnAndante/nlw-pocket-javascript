import { CheckCircle2, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { DialogTrigger } from "./ui/dialog";
import { InOrbitIcon } from "./in-orbit-icon";
import { Progress, ProgressIndicator } from "./ui/progress-bar";
import { Separator } from "./ui/separator";
import { useQuery } from "@tanstack/react-query";
import { getSummary } from "../http/get-summary";
import dayjs from "dayjs";
import ptBR from "dayjs/locale/pt-br";
import { PendingGoals } from "./pending-goals";

export function Summary() {
  const { data } = useQuery({
    queryKey: ["summary"],
    queryFn: getSummary,
    staleTime: 1000 * 60,
  });

  if (!data) {
    return <div>Carregando...</div>;
  }

  dayjs.locale(ptBR);

  const completedPercentage =
    Math.round((data?.completed / data?.total) * 100) || 0;

  const getWeekString = () => {
    const firstDay = dayjs().startOf("week");
    const lastDay = dayjs().endOf("week");

    if (firstDay.month() === lastDay.month()) {
      return `${firstDay.format("D")} a ${lastDay.format("D")} de ${firstDay.format("MMMM")}`;
    }

    return `${firstDay.format("D")} de ${firstDay.format("MMMM")} a ${lastDay.format("D")} de ${lastDay.format("MMMM")}`;
  };

  const getDayBunitin = (date: string) => {
    return dayjs(date).format("D[ de ]MMMM");
  };

  const getHourBunitin = (date: string | Date) => {
    return dayjs(date).format("HH:mm");
  };

  const getDayReference = (date: string) => {
    const day = dayjs(date);
    const today = dayjs();

    if (day.isSame(today, "day")) {
      return "Hoje";
    }

    if (day.isSame(today.subtract(1, "day"), "day")) {
      return "Ontem";
    }

    return day.format("dddd");
  };

  return (
    <div className="py-10 max-w-[480px] px-5 mx-auto flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <InOrbitIcon />
          <span className="text-lg font-semibold">{getWeekString()}</span>
        </div>

        <DialogTrigger asChild>
          <Button size="sm">
            <Plus className="size-4" />
            Cadatrar meta
          </Button>
        </DialogTrigger>
      </div>

      <div className="flex flex-col gap-3">
        <Progress max={15} value={8}>
          <ProgressIndicator style={{ width: `${completedPercentage}%` }} />
        </Progress>

        <div className="flex items-center justify-between text-xs text-zinc-400">
          <span>
            Você completou{" "}
            <span className="text-zinc-100">{data?.completed}</span> de{" "}
            <span className="text-zinc-100">{data?.total}</span> metas nessa
            semana.
          </span>
          <span>{completedPercentage}%</span>
        </div>

        <Separator />

        <PendingGoals />

        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-medium">Sua semana</h2>

          {Object.entries(data.goalsPerDay).map(([date, goals]) => {
            return (
              <div className="flex flex-col gap-4" key={date}>
                <h3 className="font-medium">
                  <span className="capitalize">{getDayReference(date)}</span>{" "}
                  <span className="text-zinc-400 text-xs">
                    ({getDayBunitin(date)})
                  </span>
                </h3>

                <ul className="flex flex-col gap-3">
                  {goals.map(goal => {
                    return (
                      <li className="flex items-center gap-2" key={goal.id}>
                        <CheckCircle2 className="size-4 text-pink-500" />
                        <span className="text-sm text-zinc-400">
                          Você completou "
                          <span className="text-sm text-zinc-100">
                            {goal.title}
                          </span>
                          " às{" "}
                        </span>
                        <span className="text-sm text-zinc-100">
                          {getHourBunitin(goal.completedAt)}h
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
