import { createContext, useCallback, useContext, useEffect, useState, PropsWithChildren } from "react";

type Crèches = {
  id: number;
  name: string;
  img: string;
  location:string;
  mapLink:string;
  shortDescription: string;
  description: string;
  link: string;
};

type Team = {
  id:number;
  firstname:string;
  lastname:string;
  profession:string;
  pp:string;
}

type Data = {
  profile: {
    firstname: string;
    lastname: string;
    telephone: string;
  };
  crèches: Crèches[];
  team:Team[];
  error: string | null;
};

const initialData: Data = {
  profile: {
    firstname: "",
    lastname: "",
    telephone:""
  },
  crèches: [],
  team:[],
  error: null
};

const DataContext = createContext<Data | undefined>(undefined);

export const DataProvider = ({ children }: PropsWithChildren<{}>) => {
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<Data | undefined>(undefined);
  const fetchData = useCallback(async () => {
    try {
      const response = await fetch("/data.json");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData: Data = await response.json();
      setData(jsonData);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("An error occurred"));
    }
  }, []);
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <DataContext.Provider value={data || initialData}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};