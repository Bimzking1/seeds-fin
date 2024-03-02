import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC, SetStateAction, useState } from "react";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";

interface Props {
  password: string;
  setPassword: (value: SetStateAction<string>) => void;
}

export const PasswordField: FC<Props> = ({
  password,
  setPassword,
}): JSX.Element => {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <div className='flex gap-2 items-center'>
      {/* Logic */}
      <input
        value={password}
        type={visible ? "text" : "password"}
        className="w-full rounded-full border border-[#494949] bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Enter ANY password'
      />
      <div>
        {
          visible? 
            <FaEye className='w-[25px] h-[25px] text-black dark:text-[#FBFAF5] hover:text-gray-500 dark:hover:text-gray-500 duration-300 cursor-pointer' onClick={() => setVisible(!visible)} /> 
            :
            <FaEyeSlash className='w-[25px] h-[25px] text-black dark:text-[#FBFAF5] hover:text-gray-500 dark:hover:text-gray-500 duration-300 cursor-pointer' onClick={() => setVisible(!visible)}/>
        }
      </div>
    </div>
  );
};