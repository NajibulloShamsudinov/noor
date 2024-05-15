import React from "react";
import blue from "@/assets/images/main/blue.svg";
import yellow from "@/assets/images/main/yellow.svg";
import card from "@/assets/images/main/card.svg";
import cardgrey from "@/assets/images/main/card-grey.svg";
import logohero from "@/assets/images/main/logo-hero.png";
import chatduo from "@/assets/images/main/chat-duo.png";
import ball from "@/assets/images/main/ball.png";
import one from "@/assets/images/main/one.png";
import two from "@/assets/images/main/two.png";
import three from "@/assets/images/main/three.png";
import product from "@/assets/images/main/product.png";
import quote from "@/assets/images/main/quote.png";
import avatar1 from "@/assets/images/main/avatar.png";
import avatar2 from "@/assets/images/main/avatar2.png";
import item1 from "@/assets/images/main/item1.png";
import item2 from "@/assets/images/main/item2.png";
import item3 from "@/assets/images/main/item3.png";
import item4 from "@/assets/images/main/item4.png";
import card2 from "@/assets/images/main/card2.svg";
import card3 from "@/assets/images/main/card3.svg";
import bg from "@/assets/images/main/bg.png";

import Image from "next/image";

export default function Home() {
  return (
    <main className="Home">
      <section className="section-hero flex w-[100%] flex-wrap lg:mt-[40px] max-w-[1200px] m-auto">
        <div className="mt-[100px] md:mt-[300px] w-[500px] lg:ml-[20px] ">
          <div>
            <svg
              className="absolute left-[50px] top-[120px] sm:top-[75px] sm:!left-[80%]"
              width="31"
              height="36"
              viewBox="0 0 31 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.3991 4.43323C11.8253 3.4484 13.044 3.09693 13.9291 3.7036L26.4927 12.3148C27.0358 12.687 27.3162 13.3386 27.2132 13.9889L24.5194 30.9859C24.345 32.0864 23.1797 32.727 22.1571 32.2845L4.51038 24.6484C3.64572 24.2743 3.24809 23.27 3.62224 22.4054L11.3991 4.43323Z"
                stroke="#EFAB18"
                stroke-width="6"
              />
            </svg>
            <svg
              className="absolute top-[600px] left-[40px] lg:top-[690px] md:left-[10%] md:!top-[300px] xs:top-[750px] "
              width="53"
              height="80"
              viewBox="0 0 53 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.81307 3.12661L12.6854 4.77234C20.5343 6.08075 24.3721 15.0942 19.8756 21.6591V21.6591C15.3793 28.2238 19.2166 37.2369 27.0651 38.5457L27.5607 38.6284C35.5232 39.9562 39.5114 49.0139 35.1143 55.7837L34.5225 56.6948C30.1002 63.5035 33.6326 72.6444 41.4842 74.7101L50.102 76.9773"
                stroke="#21D4DF"
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <svg
              className="absolute left-[30%] top-[100px] sm:top-[300px]"
              width="28"
              height="20"
              viewBox="0 0 28 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.7"
                d="M9.72427 3.11893C15.2337 0.882558 21.4337 3.03312 24.4506 7.9337L19.8783 9.7897L13.4854 12.3847L2.52028 16.8356C1.2679 11.2188 4.21487 5.35531 9.72427 3.11893Z"
                stroke="#4E92F9"
                stroke-width="4"
              />
            </svg>
            {/* <svg
              className="absolute top-[560px] left-[150px] lg:left-[190px] md:top-[400px] md:!left-[300px] "
              width="29"
              height="19"
              viewBox="0 0 29 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8848 15.9162C5.26528 13.9732 2.0135 8.27308 2.96822 2.59808L7.63193 4.21058L14.1526 6.46516L25.337 10.3323C22.5825 15.385 16.5044 17.8592 10.8848 15.9162Z"
                stroke="#D0E6A5"
                stroke-width="4"
              />
            </svg> */}
            <svg
              className="absolute top-[500px] left-[600px] md:left-[300px]"
              width="17"
              height="34"
              viewBox="0 0 17 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.03579 1.61939L5.39193 2.55011C8.85522 3.29006 10.3798 7.37485 8.24831 10.203V10.203C6.11687 13.0311 7.64128 17.1157 11.1044 17.8558L11.3231 17.9026C14.8365 18.6535 16.4271 22.7609 14.3356 25.6822L9.78406 32.0397"
                stroke="#EFAB18"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <svg
              className="absolute top-[500px] right-[40px] lg:top-[690px] md:left-[80%] xs:top-[750px]"
              width="53"
              height="80"
              viewBox="0 0 53 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.81307 3.12661L12.6854 4.77234C20.5343 6.08075 24.3721 15.0942 19.8756 21.6591V21.6591C15.3793 28.2238 19.2166 37.2369 27.0651 38.5457L27.5607 38.6284C35.5232 39.9562 39.5114 49.0139 35.1143 55.7837L34.5225 56.6948C30.1002 63.5035 33.6326 72.6444 41.4842 74.7101L50.102 76.9773"
                stroke="#EFAB18"
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                opacity="0.6"
                x="1"
                y="1"
                width="6"
                height="6"
                rx="3"
                stroke="url(#paint0_linear_213_1042)"
                stroke-width="2"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_213_1042"
                  x1="0"
                  y1="0"
                  x2="9.65661"
                  y2="4.05267"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#C381DB" />
                  <stop offset="1" stop-color="#4E92F9" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <Image className="md:hidden" src={logohero} alt="" />
          <h1 className="text-[#485466] text-[40px] md:text-[25px] md:leading-[50px] leading-[55px]">
            Ваш путь к финансовой свободе
          </h1>
          <p className="text-[#5A6980] md:text-[15px] text-[16px]">
            Готовы начать путь к финансовой независимости? Оставьте
            предварительную заявку прямо сейчас и получите эксклюзивные бонусы
            как подарок от нас.
          </p>
          <button className="gardient-item text-white p-[7px_30px] rounded-[8px] mt-[30px] font-bold">
            Оставить заявку
          </button>
        </div>

        <div className="flex justify-end ">
          <Image
            className="absolute lg:hidden xl:top-[-100px] 2xl:right-[-200px] right-0 top-0 z-[-1]"
            src={yellow}
            alt=""
          />
          <Image
            className="absolute lg:hidden  xl:top-[-100px] 2xl:right-[-200px] right-0 top-0 z-[-1]"
            src={blue}
            alt=""
          />
          <Image
            className="absolute lg:!top-[120px] sm:!right-[100px] sm:w-[250px] m-auto xl:top-[100px] 2xl:right-[200px] lg:right-[300px] right-[500px] top-[200px]"
            src={card}
            alt=""
          />
          <Image
            className="absolute sm:w-[250px] xl:top-[185px] sm:!right-[10px] sm:!top-[160px] 2xl:right-[50px]  lg:right-[150px] right-[350px] top-[285px]"
            src={cardgrey}
            alt=""
          />
        </div>
      </section>

      <section className="overflow-hidden" id="why-are-we">
        {/* SVG ZONA */}
        <svg
          className="absolute right-0"
          width="606"
          height="1081"
          viewBox="0 0 606 1081"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_213_1034)">
            <path
              d="M254 366C254 304.144 304.144 254 366 254H715C776.856 254 827 304.144 827 366V715C827 776.856 776.856 827 715 827H366C304.144 827 254 776.856 254 715V366Z"
              fill="url(#paint0_linear_213_1034)"
              fill-opacity="0.17"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_213_1034"
              x="0"
              y="0"
              width="1081"
              height="1081"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="127"
                result="effect1_foregroundBlur_213_1034"
              />
            </filter>
            <linearGradient
              id="paint0_linear_213_1034"
              x1="540.5"
              y1="254"
              x2="671.681"
              y2="770.33"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFBA27" />
              <stop offset="1" stop-color="#FFDE98" />
            </linearGradient>
          </defs>
        </svg>

        {/*  */}
        <h2 className="text-center font-bold text-[40px] text-[#242A33] mt-[100px]">
          Почему мы ?
        </h2>
        <p className="text-center text-[16px] leading-[22px] text-[#5A6980] max-w-[560px] p-[5px] m-auto">
          We offer youth with chances for career development in their practice.
          We also support a wide range of services to ensure client satisfaction
        </p>
        <div>
          <Image
            className="absolute top-[700px] left-[100px]"
            src={ball}
            alt=""
          />
        </div>
        <div className="flex justify-center  gap-[8%] flex-wrap mt-[50px]">
          <div className="gardient-card w-[360px] bg-[#FFFFFF]  rounded-[40px] p-[24px] border   mt-[20px]">
            <div className="p-[60px_50px_60px_50px] flex justify-center">
              <Image className="" src={chatduo} alt="" />
            </div>
            <h3 className="text-[20px] font-bold text-[#485466] leading-[27px] p-[15px]">
              Всё для наших клиентов
            </h3>
            <p className="text-[#5A6980] text-[16px] mt-[5px] p-[15px]">
              Наша философия базируется на простой идее: мы относимся к нашим
              клиентам так, как хотели бы, чтобы относились к нам
            </p>
            <a
              className="text-[#4E92F9] text-[16px] font-bold mt-[5px] block p-[15px]"
              href=""
            >
              Learn More
            </a>
          </div>

          <div className="gardient-card w-[360px] bg-[white] border rounded-[40px] p-[24px]  mt-[20px] ">
            <div className="p-[60px_50px_60px_50px] flex justify-center">
              <Image className="" src={card2} alt="" />
            </div>
            <h3 className="text-[20px] font-bold text-[#485466] leading-[27px] p-[15px]">
              Все в одном месте
            </h3>
            <p className="text-[#5A6980] text-[16px] mt-[5px] p-[15px]">
              Представьте, что ваше финансовое путешествие начинается здесь, но
              это только начало приключений.
            </p>
            <a
              className="text-[#4E92F9] text-[16px] font-bold mt-[5px] block p-[15px]"
              href=""
            >
              Learn More
            </a>
          </div>

          <div className="gardient-card w-[360px] border bg-[white]  rounded-[40px] p-[24px]  mt-[20px]">
            <div className="p-[60px_50px_60px_50px] flex justify-center">
              <Image className="" src={card3} alt="" />
            </div>
            <h3 className="text-[20px] font-bold text-[#485466] leading-[27px] p-[15px]">
              Финансовой независимости
            </h3>
            <p className="text-[#5A6980] text-[16px] mt-[5px] p-[15px]">
              У нас вы найдете инструменты и поддержку для достижения финансовых
              целей, не отказывая себе в ничем.
            </p>
            <a
              className="text-[#4E92F9] text-[16px] font-bold mt-[5px] block p-[15px]"
              href=""
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      <section className="mt-[50px]" id="our-products">
        <h2 className="text-center font-bold text-[40px] text-[#242A33] mt-[100px]">
          Наши продукты
        </h2>
        <p className="text-center text-[16px] leading-[22px] text-[#5A6980] max-w-[560px] p-[5px] m-auto">
          We provide a number of excellent features that will undoubtedly
          improve the user experience. We also provide a better support system
        </p>
        <div className="flex justify-center gap-[100px] flex-wrap mt-[60px]">
          <div>
            <Image className="" src={product} alt="" />
          </div>
          <div className="max-w-[470px] mt-[70px]">
            <h3 className="font-bold text-[40px] text-[#242A33]">
              Кредитная карта Орзу
            </h3>
            <div className="text-[#5A6980] leading-[22px] text-[16px] mt-[25px]">
              <p>
                Представляем вам кредитную карту Орзу – инструмент, с помощью
                которого вы можете оплачивать всё, что пожелаете, а затем
                выплачивать по частям.{" "}
              </p>
              <p className="mt-[25px]">
                Наши условия прозрачны, а{" "}
                <strong className="font-bold">
                  уникальный график платежей
                </strong>{" "}
                делает использование карты еще более удобным.
              </p>
            </div>
            <button className="gardient font-bold text-[16px] mt-[30px]">
              Read More
            </button>
          </div>
        </div>
      </section>

      <section className="relative flex-col items-center h-[1250px] overflow-hidden lg:h-[1550px] max-w-[1200px] m-auto">
        {/* Svg zona  */}
        <svg
          className="absolute right-[50px] top-[100px]"
          width="31"
          height="36"
          viewBox="0 0 31 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.3991 4.43323C11.8253 3.44841 13.044 3.09693 13.9291 3.7036L26.4927 12.3148C27.0358 12.687 27.3162 13.3386 27.2131 13.9889L24.5194 30.9859C24.345 32.0864 23.1797 32.727 22.1571 32.2845L4.51038 24.6484C3.64572 24.2743 3.24809 23.27 3.62224 22.4054L11.3991 4.43323Z"
            stroke="#21D4DF"
            stroke-width="6"
          />
        </svg>

        <svg
          className="absolute left-[0] top-[300px]"
          width="963"
          height="817"
          viewBox="0 0 963 817"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_213_273)">
            <circle
              cx="447.5"
              cy="301.5"
              r="261.5"
              fill="url(#paint0_radial_213_273)"
              fill-opacity="0.14"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_213_273"
              x="-68"
              y="-214"
              width="1031"
              height="1031"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="127"
                result="effect1_foregroundBlur_213_273"
              />
            </filter>
            <radialGradient
              id="paint0_radial_213_273"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(447.5 301.5) rotate(90) scale(384)"
            >
              <stop stop-color="#00E8B3" />
              <stop offset="1" stop-color="#00E8B3" stop-opacity="0" />
            </radialGradient>
          </defs>
        </svg>

        {/*  */}

        <div className="flex gap-[100px] flex-wrap mt-[60px] lg:justify-center">
          <div className="max-w-[450px] mt-[70px]">
            <h3 className="font-bold text-[40px] text-[#242A33]">
              Noor Pay: не просто приложение, а образ жизни
            </h3>
            <div className="text-[#5A6980] leading-[22px] text-[16px] mt-[25px] px-[10px]">
              <p>
                <strong className="font-bold">Noor Pay </strong>- это не просто
                приложение, это новый образ жизни. С нами вы получаете доступ к
                аналитике, всем финансовым возможностям, переводам, депозитам,
                кредитам и многому-многому другому, что раньше было недоступно
                для Таджикистана.
              </p>
              <p className="mt-[25px]">
                Позвольте себе{" "}
                <strong className="font-bold">наслаждаться жизнью,</strong> пока
                мы берем на себя заботу о ваших финансах.
              </p>
            </div>
            <button className="gardient font-bold text-[16px] mt-[5px] ml-[15px]">
              Read More
            </button>
          </div>
          <div className="mt-[150px]">
            <div>
              <Image
                className="absolute  right-[300px] lg:top-[600px] md:!top-[650px] md:right-[50px] sm:!right-0 xs:hidden"
                src={one}
                alt=""
              />
              <Image
                className="absolute  lg:top-[540px] md:!top-[650px] right-[200px] md:right-[100px] sm:!right-0 xs:hidden "
                src={two}
                alt=""
              />
              <Image
                className="absolute  right-[0px] lg:top-[600px] md:!top-[650px] md:right-[50px] sm:!right-0 sm:!top-[500px]"
                src={three}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-[1200px] m-auto" id="about-us">
        {/* SVG ZONA */}
        <svg
          className="absolute right-0 "
          width="1071"
          height="1223"
          viewBox="0 0 1071 1223"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_213_393)">
            <circle
              cx="611.5"
              cy="611.5"
              r="357.5"
              fill="url(#paint0_radial_213_393)"
              fill-opacity="0.25"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_213_393"
              x="0"
              y="0"
              width="1223"
              height="1223"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="127"
                result="effect1_foregroundBlur_213_393"
              />
            </filter>
            <radialGradient
              id="paint0_radial_213_393"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(611.5 611.5) rotate(90) scale(357.5)"
            >
              <stop stop-color="#073EFF" />
              <stop offset="1" stop-color="#074DFF" stop-opacity="0" />
            </radialGradient>
          </defs>
        </svg>

        <svg
          className="absolute top-[4400px] left-[90%]"
          width="88"
          height="36"
          viewBox="0 0 88 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.49997 32.7306L6.29444 23.4692C9.31118 16.106 18.9513 14.363 24.3554 20.2037V20.2037C29.7592 26.0441 39.399 24.3015 42.4161 16.9388L42.6066 16.4739C45.6675 9.00418 55.3841 7.12442 61.01 12.9136L61.7671 13.6927C67.4253 19.515 77.1221 18.0981 80.8778 10.9003L85 3"
            stroke="#C46DE3"
            stroke-width="5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        {/*  */}
        <h2 className="text-center font-bold text-[40px] text-[#242A33] mt-[100px]">
          О нас
        </h2>
        <p className="text-center text-[16px] leading-[22px] text-[#5A6980] max-w-[800px] p-[5px] m-auto">
          Мы - проект Noor, ваш надежный партнер в финансах. Наша цель -
          предоставить инструменты для успешного управления финансами и
          достижения ваших целей. Стремимся к стабильности и уверенности в
          будущем каждого клиента, учитывая их уникальные потребности и
          ожидания.
        </p>
        <div>
          <div className="flex justify-around mt-[50px] flex-wrap">
            <div>
              <div className="w-[350px] h-[250px] p-[25px] shadow rounded-[32px] mt-[20px]">
                <h3 className="gardient text-[16px] font-bold mt-[15px]">
                  Предприимчивость и приключения
                </h3>
                <hr className="w-[100%] bg-[#0C8CE9] mt-[15px]" />
                <p className="mt-[15px] font-bold text-[14px] text-[#485466]">
                  Мы амбициозны и всегда стремимся к новым горизонтам и
                  разумному риску, терпимость к переменам лежит в основе нашего
                  инновационного духа.
                </p>
              </div>
            </div>
            <div>
              <div className="w-[350px] h-[250px] p-[25px] shadow rounded-[32px] mt-[20px]">
                <h3 className="gardient text-[16px] font-bold mt-[15px]">
                  Личностный рост и командный дух
                </h3>
                <hr className="w-[100%] bg-[#0C8CE9] mt-[15px]" />
                <p className="mt-[15px] font-bold text-[14px] text-[#485466]">
                  Мы создаем среду для непрерывного обучения для раскрытия
                  потенциала и самореализации каждого члена нашей команды, ведь
                  только вместе мы сможем реализовать наши общие устремления.
                </p>
              </div>
            </div>
            <div>
              <div className="w-[350px] h-[250px] p-[25px] shadow rounded-[32px] mt-[20px]">
                <h3 className="gardient text-[16px] font-bold mt-[15px]">
                  Ответственность и увлеченность
                </h3>
                <hr className="w-[100%] bg-[#0C8CE9] mt-[15px]" />
                <p className="mt-[15px] font-bold text-[14px] text-[#485466]">
                  Мы берёмся за дело, принимаем на себя полную ответственность
                  за результат и каждый сотрудник увлечен своей работой,
                  относится к ней с самоотдачей и решимостью.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-around mt-[50px] flex-wrap">
            <div>
              <div className="w-[350px] h-[250px] p-[25px] shadow rounded-[32px] mt-[20px]">
                <h3 className="gardient text-[16px] font-bold mt-[15px]">
                  Прозрачность и честность
                </h3>
                <hr className="w-[100%] bg-[#0C8CE9] mt-[15px]" />
                <p className="mt-[15px] font-bold text-[14px] text-[#485466]">
                  Мы строим атмосферу прозрачности и честности, приветствуя
                  обратную связь и конструктивную дискуссию между коллегами.
                </p>
              </div>
            </div>
            <div>
              <div className="w-[350px] h-[250px] p-[25px] shadow rounded-[32px] mt-[20px] overflow-hidden">
                <h3 className="gardient text-[16px] font-bold mt-[15px]">
                  Рациональность и творчество{" "}
                </h3>
                <hr className="w-[100%] bg-[#0C8CE9] mt-[15px]" />
                <p className="mt-[15px] font-bold text-[14px] text-[#485466]">
                  Мы опираемся на логику, факты и рациональный анализ при
                  принятии решений. Поощряем творческий подход, нестандартное
                  мышление и инновационные идеи, ведь только сочетая разум и
                  креативность, можно создавать поистине выдающиеся решения.
                </p>
              </div>
            </div>
            <div>
              <div className="w-[350px] h-[250px] p-[25px] shadow rounded-[32px] mt-[20px]">
                <h3 className="gardient text-[16px] font-bold mt-[15px]">
                  Предприимчивость и приключения
                </h3>
                <hr className="w-[100%] bg-[#0C8CE9] mt-[15px]" />
                <p className="mt-[15px] font-bold text-[14px] text-[#485466]">
                  Мы верим, что наша деятельность в будущем привнесет позитивное
                  влияние и будет служить на благо общества. Стремимся делать
                  это скромно, без ложной гордыни, сохраняя уважение к
                  окружающим.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <svg
            className="absolute left-[0px]"
            width="659"
            height="1179"
            viewBox="0 0 659 1179"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f_843_243)">
              <circle
                cx="-104.5"
                cy="415.5"
                r="415.5"
                fill="url(#paint0_radial_843_243)"
                fill-opacity="0.21"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_843_243"
                x="-868"
                y="-348"
                width="1527"
                height="1527"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="174"
                  result="effect1_foregroundBlur_843_243"
                />
              </filter>
              <radialGradient
                id="paint0_radial_843_243"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(-104.5 415.5) rotate(90) scale(739.702)"
              >
                <stop stop-color="#C582DB" />
                <stop offset="1" stop-color="#C382DB" stop-opacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <h2 className="text-center font-bold text-[40px] text-[#242A33] mt-[100px]">
          What our clients have to say
        </h2>
        <p className="text-center text-[16px] leading-[22px] text-[#5A6980] max-w-[800px] p-[5px] m-auto">
          Our success is determined on how satisfied our customers are with the
          service. These reviews say we have stuff to do.
        </p>
        <div>
          <div className="flex justify-center gap-[100px] flex-wrap mt-[50px]">
            <div className="w-[550px] mt-[50px]">
              <Image src={quote} alt="" />
              <h3 className="gardient text-[32px] font-bold leading-[43px] mt-[34px]">
                Послание от Founder
              </h3>
              <p className="text-[16px] text-[#6C7E99] font-bold leading--[22px] mt-[14px]">
                Наши услуги в Noor ориентированы на создание долгосрочных
                финансовых стратегий, которые позволят клиентам реализовать свои
                мечты и обеспечить желаемый уровень жизни как сегодня, так и в
                будущем.
              </p>
              <p className="text-[20px] mt-[10px]">
                <strong>Юсуф Сафоев</strong>{" "}
                <span className="text-[#7E92B2] ml-[10px]">CEO</span>
              </p>
            </div>
            <div>
              <Image src={avatar1} alt="yusuf" />
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-[100px] flex-wrap mt-[50px]">
          <div>
            <Image src={avatar2} alt="saloh" />
          </div>
          <div className="w-[550px] mt-[50px]">
            <Image src={quote} alt="" />
            <h3 className="gardient text-[32px] font-bold leading-[43px] mt-[34px]">
              Послание от Founder
            </h3>
            <p className="text-[16px] text-[#6C7E99] font-bold leading--[22px] mt-[14px]">
              Мы верим, что ключом к созданию уникального продукта являются
              талантливые люди, работающие вместе в атмосфере честности и
              стремящиеся к достижению целей.
            </p>
            <p className="text-[20px] mt-[10px]">
              <strong>Салохиддин Солиев</strong>
              <span className="text-[#7E92B2] ml-[10px]">CEO</span>
            </p>
          </div>
        </div>
      </section>

      <section id="our-team" className="m-auto mt-[200px] max-w-[1200px]">
        <svg
          className="absolute left-[50px]"
          width="41"
          height="35"
          viewBox="0 0 41 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M36.442 17.3358C37.3662 18.0377 37.4204 19.4084 36.5547 20.1812L24.266 31.1504C23.7348 31.6246 22.9781 31.7507 22.3218 31.4745L5.16813 24.2548C4.05753 23.7874 3.68584 22.3981 4.41468 21.4386L16.9924 4.87931C17.6087 4.06794 18.7661 3.90979 19.5774 4.52608L36.442 17.3358Z"
            stroke="#4E92F9"
            stroke-width="6.48879"
          />
        </svg>

        <h2 className="text-center font-bold text-[40px] text-[#242A33] mt-[100px]">
          Наша команда
        </h2>
        <p className="text-center text-[16px] leading-[22px] text-[#5A6980] max-w-[800px] p-[5px] m-auto">
          People from various origins, cultures, and personalities make up our
          team. This blend makes it a powerful team
        </p>
        <div className="flex justify-around mt-[50px] text-center flex-wrap">
          <div>
            <Image src={item1} alt="" />
            <p className="font-bold text-[25px] text-[#363F4D]">
              Salohiddin Soliev
            </p>
            <p className="text-[#6C7E99] text-[16px]">Co-founder & CPO</p>
          </div>
          <div>
            <Image src={item2} alt="" />
            <p className="font-bold text-[25px] text-[#363F4D]">
              Carrey Johnson
            </p>
            <p className="text-[#6C7E99] text-[16px]">Senior Developer</p>
          </div>
          <div>
            <Image src={item3} alt="" />
            <p className="font-bold text-[25px] text-[#363F4D]">Ray Marie</p>
            <p className="text-[#6C7E99] text-[16px]">Developer</p>
          </div>
          <div>
            <Image src={item4} alt="" />
            <p className="font-bold text-[25px] text-[#363F4D]">Developer</p>
            <p className="text-[#6C7E99] text-[16px]">Designer</p>
          </div>
        </div>
      </section>
      <section className="max-w-[1200px] m-auto" id="contacts">
        <h2 className="text-center font-bold text-[40px] text-[#242A33] mt-[100px]">
          Предварительная заявка
        </h2>
        <div className="flex justify-center flex-wrap gap-[100px] sm:gap-[0px] mt-[30px] items-center">
          <div className="gardient-card  max-w-[450px] rounded-[25px] h-[290px] p-[25px]">
            <input
              className="inp-gardient  block w-[400px] h-[36px] rounded-[90px] mt-[25px] p-[25px]"
              placeholder="Имя"
              type="text"
            />
            <input
              className="inp-gardient block w-[400px] h-[36px] p-[25px]"
              placeholder="Номер телефона"
              type="text"
            />
            <input
              className="inp-gardient block w-[400px] h-[36px] p-[25px]"
              placeholder="Вҷбери карту"
              type="text"
            />
            <button className="gardient-item p-[7px_160px] sm:p-[7px_50px] rounded-[18px] font-bold text-[16px] mt-[25px] text-white">
              Отправить
            </button>
          </div>
          <div className="">
            <div className="flex mt-[25px] gap-[10px]">
              <div className="p-[10px] gardient-card w-[40px] rounded-[5px]">
                📞
              </div>
              <div>
                <p>Phone</p>
                <p>+880124332334</p>
              </div>
            </div>
            <div className="flex mt-[25px] gap-[10px]">
              <div className="p-[10px] gardient-card w-[40px] rounded-[5px]">
                ✉️
              </div>
              <div>
                <p>Email</p>
                <p>+880124332334</p>
              </div>
            </div>
            <div className="flex mt-[25px] gap-[10px]">
              <div className="p-[10px] gardient-card w-[40px] rounded-[5px]">
                🗺️
              </div>
              <div>
                <p>Location</p>
                <p>+880124332334</p>
              </div>
            </div>
          </div>
          <Image src={bg} className="absolute right-0 z-[-1]" alt="" />
        </div>
      </section>
    </main>
  );
}
