import { Link } from "react-router-dom";
import { useState } from "react";
import WhiteContainer from "./WhiteContainer";
import TitleValueWithDateContainer from "./TitleValueWithDateContainer";
import { TimelineItem } from "../../assets/staticData/educationData";
import certificateIcon from "../../assets/icons/certificate-authority-service-svgrepo-com.svg";
type TimelineContainerProps = {
  title: string;
  data: TimelineItem[];
  certificatesLink?: string;
};

const TimelineContainer = ({
  title,
  data,
  certificatesLink,
}: TimelineContainerProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <>
      <h4 className="font-semibold text-[2.6rem] leading-[3.2rem] mb-8 text-pretty">
        {title}
      </h4>
      <div className="flex gap-12">
        <div className="bg-gray-200 w-2 rounded-full"></div>
        <div className="flex-1 space-y-8">
          {data.map((item, index) => (
            <div
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className="transition-colors duration-1000"
              key={index}
            >
              <WhiteContainer containerStyle="relative p-8">
                <div
                  className={`w-2 rounded-full absolute top-0 -left-[3.5rem] ${
                    index !== data.length - 1
                      ? "h-[calc(100%+2.3rem)]"
                      : "h-[100%]"
                  }`}
                >
                  <div
                    className={`w-full h-0 rounded-full bg-primaryPink ${
                      hovered !== null && hovered >= index ? "!h-full" : ""
                    } transition-all duration-1000`}
                  ></div>
                </div>
                <div
                  className={`w-6 h-6 rounded-full absolute top-16 -left-[4rem] bg-gray-300 border-[.2rem] border-gray-200 ${
                    hovered !== null && hovered >= index
                      ? "!bg-primaryPink"
                      : ""
                  } transition-colors duration-1000`}
                ></div>
                <div
                  className={`w-[2.6rem] h-2 absolute top-[4.5rem] -left-[2.6rem] bg-gray-200 ${
                    hovered !== null && hovered >= index
                      ? "!bg-primaryPink"
                      : ""
                  } transition-colors duration-1000`}
                ></div>
                <TitleValueWithDateContainer
                  title={item.title}
                  valueName={item.valueName}
                  valueLink={item.valueLink}
                  date={item.date}
                >
                  <ul className="mt-6">
                    {item.achievements.map((achievement, idx) => (
                      <li key={idx}>
                        <p>{achievement}</p>
                      </li>
                    ))}
                  </ul>
                </TitleValueWithDateContainer>
                {certificatesLink && (
                  <Link
                    to={certificatesLink}
                    target="_blank"
                    className="mt-8 flex items-center gap-4 border border-primaryPink w-max py-1 px-8 rounded-lg"
                  >
                    <img
                      src={certificateIcon}
                      width={24}
                      alt="Certificate Icon"
                    />
                    <p className="text-[1.8rem]">Certificates & Results</p>
                  </Link>
                )}
              </WhiteContainer>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TimelineContainer;
