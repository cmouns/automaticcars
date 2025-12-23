import {
  TrendingUp,
  Users,
  Car,
  AlertCircle,
  Check,
  Eye,
  type LucideIcon,
} from "lucide-react";
import { cn } from "../../lib/utils";

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KpiCard
          title="Chiffre d'Affaires"
          value="45,250 €"
          trend="+12% vs M-1"
          icon={TrendingUp}
          isGold
        />
        <KpiCard
          title="Taux d'Occupation"
          value="82%"
          trend="Haut niveau"
          icon={Car}
        />
        <KpiCard
          title="Nouveaux Clients"
          value="+18"
          trend="Cette semaine"
          icon={Users}
        />
        <KpiCard
          title="En Attente"
          value="3"
          trend="Action requise"
          icon={AlertCircle}
          isAlert
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 backdrop-blur-sm">
          <h3 className="text-lg font-bold text-white mb-6">
            Évolution des Revenus
          </h3>
          <div className="h-64 flex items-end justify-between gap-2">
            {[35, 45, 30, 60, 75, 50, 65, 80, 55, 70, 90, 85].map((h, i) => (
              <div
                key={i}
                className="w-full bg-zinc-800 rounded-t-sm hover:bg-gold-500/50 transition-colors relative group"
              >
                <div
                  className="absolute bottom-0 w-full bg-gradient-to-t from-gold-600 to-gold-400 rounded-t-sm transition-all duration-500"
                  style={{ height: `${h}%` }}
                ></div>
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  {h * 100}€
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4 text-xs text-zinc-500 font-mono uppercase">
            <span>Jan</span>
            <span>Fév</span>
            <span>Mar</span>
            <span>Avr</span>
            <span>Mai</span>
            <span>Juin</span>
            <span>Juil</span>
            <span>Août</span>
            <span>Sep</span>
            <span>Oct</span>
            <span>Nov</span>
            <span>Déc</span>
          </div>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 backdrop-blur-sm flex flex-col">
          <h3 className="text-lg font-bold text-white mb-4">
            Dernières Demandes
          </h3>
          <div className="space-y-4 overflow-y-auto pr-2 custom-scrollbar">
            {[
              {
                car: "Audi RS6",
                client: "Mounir S.",
                status: "waiting",
                date: "12/06 - 15/06",
              },
              {
                car: "Porsche 911",
                client: "Jean D.",
                status: "confirmed",
                date: "14/06 - 14/06",
              },
              {
                car: "Urus",
                client: "Karim B.",
                status: "confirmed",
                date: "18/06 - 20/06",
              },
              {
                car: "Classe G",
                client: "Sophie L.",
                status: "rejected",
                date: "22/06 - 25/06",
              },
              {
                car: "Ferrari F8",
                client: "Marc A.",
                status: "waiting",
                date: "01/07 - 05/07",
              },
            ].map((resa, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3 bg-zinc-950/50 border border-zinc-800/50 rounded-lg group hover:border-gold-500/30 transition-colors"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white text-sm">
                      {resa.car}
                    </span>
                    <StatusBadge status={resa.status} />
                  </div>
                  <p className="text-xs text-zinc-500 mt-1">
                    {resa.client} • {resa.date}
                  </p>
                </div>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-1.5 bg-green-500/10 text-green-500 rounded hover:bg-green-500 hover:text-white transition">
                    <Check size={14} />
                  </button>
                  <button className="p-1.5 bg-zinc-800 text-zinc-400 rounded hover:bg-white hover:text-black transition">
                    <Eye size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
interface KpiCardProps {
  title: string;
  value: string | number;
  trend: string;
  icon: LucideIcon;
  isGold?: boolean;
  isAlert?: boolean;
}

function KpiCard({
  title,
  value,
  trend,
  icon: Icon,
  isGold,
  isAlert,
}: KpiCardProps) {
  return (
    <div
      className={cn(
        "p-6 rounded-xl border backdrop-blur-md transition-all duration-300 hover:-translate-y-1",
        isGold
          ? "bg-gradient-to-br from-zinc-900 to-zinc-800 border-gold-500/30 shadow-lg shadow-gold-500/5"
          : "bg-zinc-900/50 border-zinc-800",
        isAlert && "border-red-500/30 bg-red-500/5"
      )}
    >
      <div className="flex justify-between items-start mb-4">
        <div
          className={cn(
            "p-2 rounded-lg",
            isGold ? "bg-gold-500 text-black" : "bg-zinc-800 text-zinc-400"
          )}
        >
          <Icon size={20} />
        </div>
        <span
          className={cn(
            "text-xs font-medium px-2 py-1 rounded-full",
            isGold
              ? "bg-gold-500/10 text-gold-500"
              : "bg-zinc-800 text-zinc-500",
            isAlert && "bg-red-500/10 text-red-500"
          )}
        >
          {trend}
        </span>
      </div>
      <h3 className="text-3xl font-bold text-white mb-1">{value}</h3>
      <p className="text-sm text-zinc-400">{title}</p>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    waiting: "text-orange-400 bg-orange-400/10 border-orange-400/20",
    confirmed: "text-green-400 bg-green-400/10 border-green-400/20",
    rejected: "text-red-400 bg-red-400/10 border-red-400/20",
  };
  const currentStyle = styles[status] || styles.waiting;

  return (
    <span
      className={cn(
        "text-[10px] uppercase font-bold px-1.5 py-0.5 rounded border",
        currentStyle
      )}
    >
      {status === "waiting"
        ? "En attente"
        : status === "confirmed"
          ? "Validé"
          : "Refusé"}
    </span>
  );
}
