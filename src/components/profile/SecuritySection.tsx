import React, { useState } from "react";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { Lock } from "lucide-react";

export const SecuritySection: React.FC = () => {
  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  const handleUpdate = () => {
    if (passwords.new !== passwords.confirm) {
      alert("Les nouveaux mots de passe ne correspondent pas.");
      return;
    }
    alert("Mot de passe mis à jour.");
    setPasswords({ current: "", new: "", confirm: "" });
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="border-b border-zinc-800 pb-6">
        <h2 className="text-3xl font-serif text-white">Sécurité</h2>
        <p className="text-zinc-400 text-sm font-light mt-2">
          Mettez à jour votre mot de passe pour sécuriser votre compte.
        </p>
      </div>

      <div className="max-w-xl space-y-6">
        <Input
          label="Mot de passe actuel"
          type="password"
          value={passwords.current}
          onChange={(e) =>
            setPasswords({ ...passwords, current: e.target.value })
          }
          icon={<Lock size={16} />}
        />

        <div className="h-px bg-zinc-800 my-4" />

        <Input
          label="Nouveau mot de passe"
          type="password"
          value={passwords.new}
          onChange={(e) => setPasswords({ ...passwords, new: e.target.value })}
          icon={<Lock size={16} />}
        />
        <Input
          label="Confirmer le nouveau mot de passe"
          type="password"
          value={passwords.confirm}
          onChange={(e) =>
            setPasswords({ ...passwords, confirm: e.target.value })
          }
          icon={<Lock size={16} />}
        />
      </div>

      <div className="flex justify-start pt-4">
        <Button variant="secondary" onClick={handleUpdate}>
          Mettre à jour le mot de passe
        </Button>
      </div>
    </div>
  );
};
