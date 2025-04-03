import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

type ContactsType = {
  [key: string]: {
    provincialCommissioner: string;
    
    phone: string[];
    email: string;
    government: string;
  };
};

const Contacts: ContactsType = {
   "Eastern Cape": {
        provincialCommissioner: "Lt Gen Liziwe Ntshinga",
        phone: ["040 608 8413 / ", "040 608 8415"],
        email: "ECPROVCOMM@saps.gov.za",
        government: "GOVERNMENT OF SOUTH AFRICA"
    },
    "Free State": {
        provincialCommissioner: "Lt Gen Moeketsi David Sempe",
        phone: ["051 507 6561 / ", "051 507 6562"],
        email: "Fs.provcomm@saps.gov.za",
        government: "GOVERNMENT OF SOUTH AFRICA"
    },
    "Gauteng": {
        provincialCommissioner: "Lt Gen Elias Mawela",
        phone: ["011 274 7875 / ", "011 274 7860"],
        email: "gp.pc.secretary@saps.gov.za",
        government: "GOVERNMENT OF SOUTH AFRICA"
    },
    "KwaZulu-Natal": {
        provincialCommissioner: "Lt Gen Khombinkosi Elvis Jula",
        phone: ["031 325 6580"],
        email: "Provincialcommissioner@saps.org.za",
        government: "GOVERNMENT OF SOUTH AFRICA"
    },
    "Limpopo": {
        provincialCommissioner: "Lt Gen Nneke Jim Ledwaba",
        phone: ["015 290 6227"],
        email: "Limprov.comm.secr@saps.gov.za",
        government: "GOVERNMENT OF SOUTH AFRICA"
    },
    "Mpumalanga": {
        provincialCommissioner: "Lt Gen Bethuel Mondli Zuma",
        phone: ["013 762 4537 / ", "013 762 4838"],
        email: "mppcso@saps.gov.za",
        government: "GOVERNMENT OF SOUTH AFRICA"
    },
    "Northern Cape": {
        provincialCommissioner: "Lt Gen Risimati Peter Shivuri",
        phone: ["053 839 2845 / ", "053 839 2877"],
        email: "nc.pc.pa@saps.gov.za",
        government: "GOVERNMENT OF SOUTH AFRICA"
    },
    "North West": {
        provincialCommissioner: "Lt Gen Baile Brenda Motswenyane",
        phone: ["018 285 8073 / ", "018 285 8069"],
        email: "Nwprov.staff@saps.gov.za",
        government: "GOVERNMENT OF SOUTH AFRICA"
    },
    "Western Cape": {
        provincialCommissioner: "Lt Gen Sindile Christopher Mfazi (Acting)",
        phone: ["021 417 7148"],
        email: "wcpcpa@saps.gov.za",
        government: "GOVERNMENT OF SOUTH AFRICA"
    }
};

export function CitySelect() {
    const [selectedCity, setSelectedCity] = useState<keyof ContactsType>("");
  
    return (
      <div className="p-4 max-w-lg mx-auto">
        <Select onValueChange={setSelectedCity}>
          <SelectTrigger className="w-full">Select a city</SelectTrigger>
          <SelectContent>
            {Object.keys(Contacts).map((city) => (
              <SelectItem key={city} value={city}>
                {city}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
  
        {selectedCity && (
          <Card className="mt-4 p-4">
            <CardContent>
              <h2 className="text-xl font-bold">{selectedCity} Police Station</h2>
              <p><strong>Address:</strong> {Contacts[selectedCity].provincialCommissioner}</p>
              <p><strong>Phone:</strong> {Contacts[selectedCity].phone}</p>
              <p><strong>Email:</strong> {Contacts[selectedCity].email}</p>
            </CardContent>
          </Card>
        )}
      </div>
    );
  }
  