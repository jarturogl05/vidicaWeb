import React, { SetStateAction } from "react";
import { Button } from "../buttons/Button";
import { ButtonVariant } from "../buttons/buttonTypes";
import { Header } from "../common/Header";
import { Link } from "../common/Link";
import { TextInput } from "../common/TextInput";
import { Title } from "../common/Title";

// @ts-ignore
import Login from "../../assets/login.png";
import Footer from "./components/Footer";

type Props = {
  setState: React.Dispatch<React.SetStateAction<any>>;
};

const LoginScreen: React.FC<Props> = ({setState}: Props) => {
  return (
    <div className="w-screen h-screen overflow-hidden flex flex-col">
      <div className="w-screen h-screen overflow-hidden flex flex-row">
        <div className="basis-1/2 flex">
          <img src={Login} />
        </div>

        <div className=" basis-1/3 flex flex-col justify-center">
          <Header />
          <div className="flex flex-col w-full items-center px-[50px] gap-[40px]">
            <TextInput
              name="email"
              onInput={() => {}}
              value="test@test.com"
              label="Correo electronico"
            />
            <TextInput
              name="password"
              onInput={() => {}}
              value="aaaa"
              label="Contraseña"
              type="password"
            />
          </div>
          <div className="flex flex-col justify-evenly items-center gap-[20px] mt-[40px]">
            <Button text="Ingresar" variant={ButtonVariant.PRIMARY} ></Button>
            <button onClick={(e) => setState(true)} >askjbfhijskdbgfkjdsfbakjsfnhbasdkj</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default LoginScreen;
