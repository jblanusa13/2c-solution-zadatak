import { v4 as uuidv4 } from "uuid";
export const db = {
  users: [
    {
      id: uuidv4(),
      name: "Jelena Blanuša",
      email: "jblanusa13@gmail.com",
    },
    {
      id: uuidv4(),
      name: "Pera Peric",
      email: "peki@gmail.com",
    },
  ],
};
