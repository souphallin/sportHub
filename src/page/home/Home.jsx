import React from "react";
import Hero from "../../assets/homePage/HeroSectionHome.jpg";
import CardOne from "../../assets/homePage/CardOne.jpg";
import CardTwo from "../../assets/homePage/CardTwo.jpg";
import CardThree from "../../assets/homePage/CardThree.jpg";
import Football from "../../assets/homePage/football.jpg";
import Volleyball from "../../assets/homePage/volleyball.png";
import Basketball from "../../assets/homePage/basket.jpg";
import Ronaldo from "../../assets/homePage/Ronaldo.jpg";
import Messi from "../../assets/homePage/Messi.jpg";
import CommentOne from "../../assets/comment1.jpg";
import CommentTwo from "../../assets/comment2.jpg";

export default function Home() {
  return (
    <>
      <header className="relative">
        <img
          className="object-cover h-[850px] w-full top-0 -z-30"
          src={Hero}
          alt="Background image description"
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        />
        <div className="w-10/12 mx-auto">
          <div className="absolute top-[180px] text-white text-[46px] font-bold">
            <div className="inline-block">
              <h1>លេងកីឡា</h1>
              <h1>
                មានសារសំខាន់<span className="text-[#f31f1e]">ណាស់</span>
              </h1>
              <h1 className="text-[#f23a39] text-typing">
                ចំពោះសុខភាព និង ស្មារតី
              </h1>
            </div>
            <hr className="border-2 w-[240px]" />
            <h2 className="text-[20px] font-normal my-5">
              "ប្រសិនបើចិត្តរបស់ខ្ញុំអាចបង្កើតវា ហើយបេះដូង
              <br /> របស់ខ្ញុំអាចជឿវាបាន
              <br /> នោះខ្ញុំអាចសម្រេចវាបាន"។
            </h2>
            <hr className="border-2 w-[180px]" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center pt-10">
            <div className="container absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-full px-4 flex justify-center space-x-6">
              <div className="w-auto">
                <img
                  src={CardOne}
                  alt="Image 1"
                  className="w-[300px] h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="w-auto">
                <img
                  src={CardTwo}
                  alt="Image 2"
                  className="w-[300px] h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="w-auto">
                <img
                  src={CardThree}
                  alt="Image 3"
                  className="w-[300px] h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="mt-40">
          <h1 className="text-4xl text-center font-extrabold dark:text-white pt-9">
            កិឡាដែលពេញនិយម
          </h1>
          <h5 className="text-xl text-center text-gray-400 font-bold dark:text-white pt-6">
            «យើង​មិន​ចង់​ប្រាប់​ពី​សុបិន​របស់​យើង​ទេ យើង​ចង់​បង្ហាញ​វា»។
            Cristiano Ronaldo <br /> កីឡាករបាល់ទាត់ព័រទុយហ្គាល់ 5
          </h5>
        </section>
        <section className="relative flex items-center justify-center pt-10">
          <div className="w-full md:w-11/12 lg:w-9/12 p-4 md:p-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-10">
              <div className="relative cursor-default">
                <img
                  className="h-[439px] w-[332px] object-cover rounded-lg"
                  src={Football}
                  alt="First image description"
                />
                <p className="absolute bottom-0 left-0 w-full bg-gray-400 bg-opacity-50 p-4 rounded-b-lg text-white text-lg font-bold text-center">
                  Football
                </p>
              </div>
              <div className="relative cursor-default">
                <img
                  className="h-[439px] w-[332px] object-cover rounded-lg"
                  src={Volleyball}
                  alt="Second image description"
                />
                <p className="absolute bottom-0 left-0 w-full bg-gray-400 bg-opacity-50 p-4 rounded-b-lg text-white text-lg font-bold text-center">
                  Volleyball
                </p>
              </div>
              <div className="relative cursor-default">
                <img
                  className="h-[439px] w-[332px] object-cover rounded-lg"
                  src={Basketball}
                  alt="Third image description"
                />
                <p className="absolute bottom-0 left-0 w-full bg-gray-400 bg-opacity-50 p-4 rounded-b-lg text-white text-lg font-bold text-center">
                  Baseketball
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h1 className="text-4xl text-center font-extrabold dark:text-white pt-9">
            កម្មវិធីដែលយើងមាន
          </h1>
          <h5 className="text-xl text-center w-full max-w-[800px] mx-auto text-gray-400 font-bold dark:text-white pt-6 px-4 md:px-6">
            Sport Hub ជា Website និយាយពីកីឡាដែលពេញនិយមជាងគេ
            ហើយព័ត៏មាន​​ប្រកបទៅដោយទំនុកចិត្តសម្រាប់អ្នកស្រោលាញ់កីឡា។
          </h5>
        </section>
        <section className="relative flex items-center justify-center my-16">
          <div className="w-full md:w-[80%] p-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-10">
              <div className="w-full md:h-[240px] lg:h-[200px] max-h-[300px] h-auto text-center px-5 pt-3 pb-11 bg-gray-200 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <div className="mb-2 text-[28px] tracking-tight text-gray-900 dark:text-white text-center">
                  <i class="fa-regular fa-lightbulb text-[#FB3939]"></i>
                </div>
                <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  ព័ត៏មានថ្មីៗ
                </h1>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Sport Hub មានការ update <br /> ព័ត៏មានជារាងរាល់ថ្ងៃ។
                </p>
              </div>
              <div className="w-full md:h-[240px] lg:h-[200px] max-h-[300px] h-auto text-center px-5 pt-3 pb-11 bg-gray-200 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <div className="mb-2 text-[28px] tracking-tight text-gray-900 dark:text-white text-center">
                  <i class="fa-solid fa-earth-americas text-[#FB3939]"></i>
                </div>
                <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  ស្វែងរកទីតាំង
                </h1>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  មានភាពងាយស្រួយក្នុងការ​​ <br />
                  មើលទីតាំង។
                </p>
              </div>
              <div className="w-full md:h-[240px] lg:h-[200px] max-h-[300px] h-auto text-center px-5 pt-3 pb-11 bg-gray-200 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <div className="mb-2 text-[28px] tracking-tight text-gray-900 dark:text-white text-center">
                  <i class="fa-regular fa-calendar text-[#FB3939]"></i>
                </div>
                <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  កក់ទីតាំង
                </h1>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Sport Hub បង្កើនភាពងាយ ស្រួល <br /> តាមវិធីសាស្ត្រច្រើន។
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-11/12 lg:w-9/12 mx-auto flex flex-col md:flex-row gap-5">
          <div className="flex-1">
            <img
              src="https://the18.com/sites/default/files/feature-images/20170424-The18-Image-Messi-Shows-Love-For-Barca-500th-Goal.jpg"
              alt="MessiTheGoat"
              className="h-[632px] w-[610px] rounded-lg object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="p-6 rounded-lg w-full max-w-screen-md">
              <h1 className="text-3xl font-bold mb-6">
                ទទួលបានសេវាកម្មពី​ <br /> ពួកយើងតាមរយ
              </h1>
              <hr className="mb-6 border-black border-2 w-[80px]" />
              <div className="flex items-start mb-6">
                <div className="bg-[#172554] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl mr-4">
                  ១
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2">តេឡេក្រាម</h2>
                  <div className="border-l-2 border-black pl-2">
                    <p className="mb-1">Sport Hub សែន តេឡេក្រាម:</p>
                    <p className="mb-1">+090 999 999</p>
                    <p className="mb-1">+080 888 888</p>
                  </div>
                </div>
              </div>
              <div className="flex items-start mb-6">
                <div className="bg-[#172554] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl mr-4">
                  ២
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2">លេខទូរស័ព្ទ</h2>
                  <div className="border-l-2 border-black pl-2">
                    <p className="mb-1">Sport Hub សែន ទំនាក់ទំនង:</p>
                    <p className="mb-1">+070 777 777</p>
                    <p className="mb-1">+080 888 888</p>
                  </div>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-[#172554] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl mr-4">
                  ៣
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2">ផ្ញើសារ</h2>
                  <div className="border-l-2 border-black pl-2">
                    <p className="mb-1">Sport Hub សែន ទំនាក់ទំនង:</p>
                    <p className="mb-1">+070 777 777</p>
                    <p className="mb-1">+080 888 888</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-11/12 lg:w-9/12 mx-auto">
          <div className="flex mt-9 justify-between">
            <div className="pb-10">
              <h1 className="text-4xl font-extrabold dark:text-white">
                មូលហេតុ ៣ ដែលអ្នកគួរតែ
                <br />
                ជ្រើសរើសយក Sport Hub
              </h1>
              <hr className="border-black border-2 w-24 mt-8" />
            </div>
            <div className="flex items-center gap-3 mb-[95px]">
              <div>
                <p className="border-2 border-black px-2 py-[2px] rounded-lg text-[20px]">
                  Sport hub ជាជម្រើសដំបូង
                </p>
              </div>
              <div className="pb-[33px]">
                <hr className="border-black border-2 w-24 mt-8" />
              </div>
            </div>
          </div>
        </section>
        <section className="relative flex items-center justify-center">
          <div className="w-full max-w-5xl p-4">
            <div className="flex flex-col md:flex-row justify-center items-center gap-28">
              <div className="w-full md:w-1/3 bg-white p-6 rounded-lg dark:bg-gray-800">
                <div className="flex items-center">
                  <div className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <i class="fa-regular fa-clock"></i>
                  </div>
                  <h1 className="ml-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    ពេលវេលា
                  </h1>
                </div>
                <p className="mt-4 font-normal text-gray-700 dark:text-gray-400 w-full md:w-[240px]">
                  Sport Hub ជា Website និយាយពី កីឡាដែលពេញនិយមជាងគេ ហើយ
                  ព័ត៏មាន​​ប្រកបដោយទំនុកចិត្តសម្រាប់ អ្នកស្រោលាញ់កីឡា។
                </p>
              </div>
              <div className="w-full md:w-1/3 bg-white p-6 rounded-lg dark:bg-gray-800">
                <div className="flex items-center">
                  <div className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <i class="fa-regular fa-handshake"></i>
                  </div>
                  <h1 className="ml-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    បំពេញតម្រូវការ
                  </h1>
                </div>
                <p className="mt-4 font-normal text-gray-700 dark:text-gray-400 w-full md:w-[240px]">
                  Sport Hub ជា Website និយាយពី កីឡាដែលពេញនិយមជាងគេ ហើយ
                  ព័ត៏មាន​​ប្រកបដោយទំនុកចិត្តសម្រាប់ អ្នកស្រោលាញ់កីឡា។
                </p>
              </div>
              <div className="w-full md:w-1/3 bg-white p-6 rounded-lg dark:bg-gray-800">
                <div className="flex items-center">
                  <div className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <i class="fa-regular fa-heart"></i>
                  </div>
                  <h1 className="ml-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    ទំនុកចិត្ត
                  </h1>
                </div>
                <p className="mt-4 font-normal text-gray-700 dark:text-gray-400 w-full md:w-[240px]">
                  Sport Hub ជា Website និយាយពី កីឡាដែលពេញនិយមជាងគេ ហើយ
                  ព័ត៏មាន​​ប្រកបដោយទំនុកចិត្តសម្រាប់ អ្នកស្រោលាញ់កីឡា។
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-11/12 lg:w-9/12 mx-auto mt-8">
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold dark:text-white text-center">
              Feedback ពីអតិថិជនរបស់
              <br /> Sport Hub ពួកយើង
            </h1>
            <hr className="border-black border-2 w-16 md:w-24 mt-4 md:mt-8 mx-auto" />
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-10 mb-28">
            <div className="relative mt-5 bg-[#172554] w-full md:w-[573px] h-auto md:h-[351px] p-5 rounded-lg text-white">
              <div>
                <i className="fa-solid fa-quote-left text-[30px] md:text-[40px]"></i>
              </div>
              <div className="flex flex-col py-5 px-10 gap-5 md:gap-12">
                <div>
                  <p className="text-[18px] md:text-[22px]">
                    Sport Hub ជា Website ដែលមានភាពងាយ ស្រួល
                    និងឆាប់រហ័សក្នុងការស្វែងរក។
                  </p>
                </div>
                <div className="flex gap-4 md:gap-5 items-center">
                  <div>
                    <img
                      src={CommentOne}
                      alt="CommentOne"
                      className="w-[56px] h-[56px] md:h-[68px] md:w-[68px] object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl">សេង ម៉េងអៀម</h3>
                    <p className="text-sm md:text-base">
                      អ្នកគាំទ្រSportHub
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-5 right-5 text-[30px] md:text-[40px]">
                <i className="fa-solid fa-quote-right"></i>
              </div>
            </div>
            <div className="relative mt-5 bg-black w-full md:w-[573px] h-auto md:h-[351px] p-5 rounded-lg text-white">
              <div>
                <i className="fa-solid fa-quote-left text-[30px] md:text-[40px]"></i>
              </div>
              <div className="flex flex-col py-5 px-10 gap-5 md:gap-5">
                <div>
                  <p className="text-[18px] md:text-[22px]">
                    Sport Hub ជា Website សេវាកម្មរហ័សទាន់ចិត្ត
                    មានភាពងាយស្រួយក្នុងការទំនាក់ទំនង់​ អាកប្បកិរិយា រួសរាយ។
                  </p>
                </div>
                <div className="flex gap-4 md:gap-5 items-center">
                  <div>
                    <img
                      src={CommentTwo}
                      alt="CommentTwo"
                      className="w-[56px] h-[56px] md:h-[68px] md:w-[68px] object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl">ហ៊ន់ កញ្ញា</h3>
                    <p className="text-sm md:text-base">
                      អ្នកគាំទ្រSportHub
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-5 right-5 text-[30px] md:text-[40px]">
                <i className="fa-solid fa-quote-right"></i>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
