import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import ReactCountryFlag from "react-country-flag";

const COUNTRY_CODES = [
  { code: "+33", iso: "FR" }, { code: "+44", iso: "GB" }, { code: "+1", iso: "US" },
  { code: "+34", iso: "ES" }, { code: "+49", iso: "DE" }, { code: "+39", iso: "IT" },
  { code: "+41", iso: "CH" }, { code: "+32", iso: "BE" }, { code: "+352", iso: "LU" },
];

interface PhoneInputGroupProps {
  countryCode: string;
  phoneNumber: string;
  onCountryChange: (code: string) => void;
  onChange: (e: { target: { name: string; value: string } }) => void;
}

export const PhoneInputGroup: React.FC<PhoneInputGroupProps> = ({
  countryCode,
  phoneNumber,
  onCountryChange,
  onChange,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const selectedCountry = COUNTRY_CODES.find((c) => c.code === countryCode) || COUNTRY_CODES[0];

  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-xs uppercase tracking-widest text-gold-500 font-serif ml-1">
        Numéro de téléphone
      </label>
      <div className="relative flex group">
        <div className="relative">
          <button
            type="button"
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center gap-1.5 h-full bg-dark-800/50 border border-gray-700 rounded-l-lg px-3 text-sm text-white hover:border-gold-500"
          >
            <ReactCountryFlag countryCode={selectedCountry.iso} svg style={{ width: "20px" }} />
            {selectedCountry.code} <ChevronDown size={14} />
          </button>
          
          {showDropdown && (
            <div className="absolute top-full left-0 mt-1 w-40 bg-[#1A1A1A] border border-gray-700 rounded-lg shadow-xl z-20 max-h-40 overflow-y-auto">
              {COUNTRY_CODES.map((c) => (
                <button
                  key={c.code}
                  type="button"
                  onClick={() => { onCountryChange(c.code); setShowDropdown(false); }}
                  className="w-full text-left px-3 py-2 text-sm text-gray-300 hover:bg-gold-500/20 flex gap-2"
                >
                  <ReactCountryFlag countryCode={c.iso} svg style={{ width: "20px" }} /> {c.code}
                </button>
              ))}
            </div>
          )}
        </div>
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Numéro"
          value={phoneNumber}
          onChange={(e) => onChange({ target: { name: "phoneNumber", value: e.target.value } })}
          required
          className="w-full bg-dark-800/50 border border-gray-700 text-white py-3 px-4 rounded-r-lg focus:border-gold-500 outline-none"
          inputMode="numeric"
        />
      </div>
    </div>
  );
};