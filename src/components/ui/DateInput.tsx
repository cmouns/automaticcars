import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Calendar } from "lucide-react";
import { format, parseISO } from "date-fns";
import { fr } from "date-fns/locale";

interface DateInputProps {
  label: string;
  value: string;
  onChange: (e: { target: { name: string; value: string } }) => void;
  name: string;
  className?: string;
  required?: boolean;
  variant?: "dark" | "light"; 
}

export const DateInput: React.FC<DateInputProps> = ({
  label,
  value,
  onChange,
  name,
  className,
  required = false,
  variant = "dark", 
}) => {
  const selectedDate = value ? parseISO(value) : null;

  const handleChange = (date: Date | null) => {
    if (date) {
      const formatted = format(date, "yyyy-MM-dd");
      onChange({ target: { name, value: formatted } });
    } else {
      onChange({ target: { name, value: "" } });
    }
  };

  // --- MODIFICATION ICI ---
  // On remplace border-gray-xxx par border-gold-500/30
  const styles = {
    dark: "border-gold-500 bg-dark-800 text-white placeholder-gray-500",
    light: "border-gold-500 bg-white text-black placeholder-gray-400",
  };
  // ------------------------

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={name}
          className="text-xs uppercase tracking-widest text-gold-500 font-serif ml-1 mb-1 block"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <div className="relative group">
        <DatePicker
          selected={selectedDate}
          onChange={handleChange}
          dateFormat="dd/MM/yyyy"
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          placeholderText="JJ/MM/AAAA"
          maxDate={new Date()}
          locale={fr}
          autoComplete="off"
          name={name}
          className={`
            w-full py-3 pl-4 pr-10 rounded-lg border
            focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500
    
            cursor-pointer
            ${styles[variant]}
            ${className}
          `}
          wrapperClassName="w-full"
        />

        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-gray-400 group-focus-within:text-gold-500 transition-colors">
          <Calendar size={18} />
        </div>
      </div>
    </div>
  );
};