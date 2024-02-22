import Link from 'next/link'
import React from 'react'
import { IoIosPhonePortrait } from "react-icons/io";
import { IoIosCheckmark } from "react-icons/io";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { TbDeviceAirpodsCase } from "react-icons/tb";

function Contacts() {
  return (
    <div className='flex justify-center bg-gray-100 '>
      <div className='w-[75%] '>
        <div className='mb-4'>
          <div className='flex w-[75%] gap-4 text-sm mt-6'>
            <Link href='/'>Головна</Link>
            <span className='text-black cursor-default'>•</span>
            <h1>Гарантія від In-Apple</h1>
          </div>
          <div className='text-center my-12 text-[25px] font-bold '>Гарантія від In-Apple турбота про Ваш час</div>
        </div>
        <div className='bg-white px-10 py-4'>
          <div className='mb-12   mt-6' >
            <div className='flex items-center gap-3'>
              <IoIosPhonePortrait className='text-[40px] text-blue-500' />
              <span className='text-blue-500 text-[30px]'>Гарантія In-Apple для iPhone, iPad та Apple Watch.</span>
            </div>
            <div className='mb-6 '>
              <h1 className='text-[24px] mt-3 ml-2'>Гарантія від In-Apple 12 або 24 місяці -  це турбота  про  вашу техніку Apple</h1>
              <div className='text-[18px] mt-5 text-gray-400'>
                <div className='flex items-center '>
                  <IoIosCheckmark className='text-[30px] text-blue-500' />
                  <p>Гарантійне обслуговування. У разі виявлення заводського дефекту, ми зробимо заміну пристрою на новий, протягом 1-5 робочих днів.</p>
                </div>
              </div>
              <div className='text-[18px] mt-2 text-gray-400'>
                <div className='flex items-center '>
                  <IoIosCheckmark className='text-[30px] text-blue-500' />
                  <p>Повне налаштування та підтримка нового пристрою</p>
                </div>
              </div>
              <div className='text-[18px] flex items-center  mt-2 text-gray-400'>
                <IoIosCheckmark className='text-[30px] text-blue-500' />
                <p>Безкоштовне захисне скло Base або преміальне захисне скло зі знижкою у 20% на iPhone або iPad.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-white mt-5 px-10'>
          <div className='mb-12 border-b pt-6'>
            <div className='flex items-center gap-3'>
              <HiOutlineComputerDesktop className='text-[40px] text-blue-500' />
              <span className=' text-[30px] text-blue-500'>Гарантія In-Apple для MacBook</span>
            </div>
            <div className='my-6 '>
              <h1 className='text-[24px] mt-3 ml-2'>Гарантія In-Apple для Mac 12 місяців</h1>
              <div className='text-[18px] flex items-center  mt-2 text-gray-400'>
                <IoIosCheckmark className='text-[30px] text-blue-500' />
                <p>12 місяців гарантії від заводських дефектів для Mac.</p>
              </div>
              <div className='text-[18px] flex items-center  mt-2 text-gray-400'>
                <IoIosCheckmark className='text-[30px] text-blue-500' />
                <p>Знижка 10% на ремонт, при негарантійному випадку.</p>
              </div>
              <div className='text-[18px] flex items-center  mt-2 text-gray-400'>
                <IoIosCheckmark className='text-[30px] text-blue-500' />
                <p>Безкоштовна встановлення Microsoft Office 2019.</p>
              </div>
              <div className='text-[18px] flex items-center  mt-2 text-gray-400'>
                <IoIosCheckmark className='text-[30px] text-blue-500' />
                <p>Безкоштовна чистка від пилу з заміною термопасти один раз на час дii пакету.</p>
              </div>
              <div className='text-[18px] flex items-center  mt-2 text-gray-400'>
                <IoIosCheckmark className='text-[30px] text-blue-500' />
                <p>Безкоштовна технічна консультація впродовж всього гарантійного терміну.</p>
              </div>
            </div>
          </div>
          <div className='pb-10'>
            <div className='mb-6 '>
              <h1 className='text-[24px] mt-3 ml-2'>Гарантія In-Apple для Mac 24 місяців</h1>
              <div className='text-[18px] flex items-center  mt-2 text-gray-400'>
                <IoIosCheckmark className='text-[30px] text-blue-500' />
                <p>24 місяців гарантії від заводських дефектів для Mac.</p>
              </div>
              <div className='text-[18px] flex items-center  mt-2 text-gray-400'>
                <IoIosCheckmark className='text-[30px] text-blue-500' />
                <p>Знижка 10% на ремонт, при негарантійному випадку.</p>
              </div>
              <div className='text-[18px] flex items-center  mt-2 text-gray-400'>
                <IoIosCheckmark className='text-[30px] text-blue-500' />
                <p>Безкоштовна встановлення Microsoft Office 2019.</p>
              </div>
              <div className='text-[18px] flex items-center  mt-2 text-gray-400'>
                <IoIosCheckmark className='text-[30px] text-blue-500' />
                <p>Безкоштовна чистка від пилу з заміною термопасти один раз на час дii пакету.</p>
              </div>
              <div className='text-[18px] flex items-center  mt-2 text-gray-400'>
                <IoIosCheckmark className='text-[30px] text-blue-500' />
                <p>Безкоштовна технічна консультація впродовж всього гарантійного терміну.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-white  my-5 px-10 py-4'>
          <div className='' >
            <div className='flex items-center gap-3'>
              <HiOutlineComputerDesktop className='text-[40px] text-blue-500' />
              <span className='text-blue-500 text-[30px]'>Гарантія In-Apple + захист MacBook</span>
            </div>
            <div className='mb-6 '>
              <div className='border-b'>
                <div className='w-2/3 my-4'>
                  <h1>
                    У разі винекнення пошкодження, Ви можете пологадити свій Mac, але не більше трьох звернень за календарний рік, додатково, у разі настаня сервісного випадку стягується комісія за обслуговування у розмірі:
                  </h1>
                </div>
                <div className='mb-6'>
                  <h1><span className=' font-bold'>4999 грн.</span> за пошкодження екрану чи зовнішнього корпусу</h1>
                  <h1><span className=' font-bold'>10999 грн.</span> за інше випадкове пошкодження.</h1>
                </div>
                <div className='w-2/3 mb-4'>
                  <h1>
                    Усунення пошкоджень проводитися в сервісному центрі, відповідно до регламенту. Сервісний центр на власний розсуд виконує ремонт чи заміну несправного модуля.
                  </h1>
                </div>
              </div>
              <div className='mt-5'>
                <h1 className='text-[20px]'>Додаткові переваги захисту для Mac:</h1>
                <div className='text-[18px] flex items-center  mt-2 text-gray-400'>
                  <IoIosCheckmark className='text-[30px] text-blue-500' />
                  <p>Безкоштовне встановлення Microsoft Office 2019.</p>
                </div>
                <div className='text-[18px] flex items-center  mt-2 text-gray-400'>
                  <IoIosCheckmark className='text-[30px] text-blue-500' />
                  <p>Чистка від пилу з заміною термопасти один раз на час дii пакету.</p>
                </div>
                <div className='text-[18px] flex items-center  mt-2 text-gray-400'>
                  <IoIosCheckmark className='text-[30px] text-blue-500' />
                  <p>Технічна консультація впродовж всього гарантійного терміну.</p>
                </div>
                <div className='text-[18px] flex items-center  mt-2 text-gray-400'>
                  <IoIosCheckmark className='text-[30px] text-blue-500' />
                  <p>Підмінний фонд на час ремонту.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-white px-10 py-4'>
          <div className='mb-12 mt-6 ' >
            <div className='flex items-center gap-3'>
              <TbDeviceAirpodsCase className='text-[40px] text-blue-500' />
              <span className='text-blue-500 text-[30px]'>Гарантія In-Apple для AirPods</span>
            </div>
            <div className='my-6 '>
              <div className='text-[18px] flex items-center  mt-2 text-gray-400'>
                <IoIosCheckmark className='text-[30px] text-blue-500' />
                <p>Гарантійне обслуговування. У разі виявлення заводського дефекту, ми зробимо заміну <br /> непрацюючого елементу на новий, протягом 1-5 робочих днів.</p>
              </div>
              <div className='text-[18px] flex items-center  mt-2 text-gray-400'>
                <IoIosCheckmark className='text-[30px] text-blue-500' />
                <p>Налаштування та підтримка нового пристрою.</p>
              </div>
              <div className='text-[18px] flex items-center  mt-2 text-gray-400'>
                <IoIosCheckmark className='text-[30px] text-blue-500' />
                <p>Одна безкоштовна чистка протягом дії пакету.</p>
              </div>
              <div className='text-[18px] flex items-center  mt-2 text-gray-400'>
                <IoIosCheckmark className='text-[30px] text-blue-500' />
                <p>Налаштування підписки AppleMusic.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-white  my-5 px-10 py-4'>
          <div className='pt-4' >
            <div className='flex items-center gap-3'>
              <TbDeviceAirpodsCase className='text-[40px] text-blue-500' />
              <span className='text-blue-500 text-[30px]'>Гарантія In-Apple + захист MacBook</span>
            </div>
            <div className='mb-6 '>
              <div className=''>
                <div className='w-2/3 my-4 font-bold'>
                  <h1>
                    Гарантійне обслуговування, пов’язане з будь-яким заводськими дефектом або механічними пошкодженнями
                  </h1>
                </div>
                <div className='flex items-center mb-3'>
                  <IoIosCheckmark className='text-[30px] text-blue-500' />
                  <p>Гарантійне обслуговування. У разі виявлення заводського дефекту, ми зробимо заміну <br /> непрацюючого елементу на новий, протягом 1-5 робочих днів.</p>
                </div>
                <div className='flex items-center mb-3'>
                  <IoIosCheckmark className='text-[30px] text-blue-500' />
                  <p>Однарозова заміна при механічних пошкодженнях, такі як (попадання вологи, незначні тріщини, потертості) <br /> ми зробимо заміну пошкодженого елементу на новий, протягом 1-5 днів. *</p>
                </div>
                <div className='flex items-center mb-3'>
                  <IoIosCheckmark className='text-[30px] text-blue-500' />
                  <p>Налаштування та підтримка нового пристрою.</p>
                </div>
                <div className='flex items-center mb-3'>
                  <IoIosCheckmark className='text-[30px] text-blue-500' />
                  <p>Одна безкоштовна чистка протягом дії пакету.</p>
                </div>
                <div className='flex items-center mb-3'>
                  <IoIosCheckmark className='text-[30px] text-blue-500' />
                  <p>Налаштування підписки AppleMusic.</p>
                </div>
                <div className='font-bold'>*Не покриває втрату</div>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-white px-10 py-4'>
          <div className='mb-12 mt-6 ' >
            <div className='flex items-center gap-3'>
              <img src="/icon/broken-iphone.png" alt="" className='h-[40px]' />
              <span className='text-blue-500 text-[30px]'>Гарантія In-Apple + захист iPhone</span>
            </div>
            <div className='my-6'>
              <div className='text-[18px] flex items-center  mt-2 '>
                <IoIosCheckmark className='text-[30px] text-blue-500' />
                <p>Гарантія In-Apple 30 днів - це турбота про Ваш iPhone, iPad, Macbook та Apple Watch.</p>
              </div>
              <div className='text-[18px] flex items-center  mt-2 '>
                <IoIosCheckmark className='text-[30px] text-blue-500' />
                <p>Гарантійне обслуговування. У разі виявлення заводського дефекту, <br /> ми зробимо заміну пристрою на новий.</p>
              </div>
              <div className='text-[18px] flex items-center  mt-2 '>
                <IoIosCheckmark className='text-[30px] text-blue-500' />
                <p>Після закінченя 30 днів, ремонтом пристрою займається Авторизований Сервісний центр <br />згідно правилам компанії Apple</p>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-white mt-5 px-10 py-4'>
          <div className='mb-12 mt-6 ' >
            <div className='flex items-center gap-3'>
              <IoIosPhonePortrait className='text-[40px] text-blue-500' />
              <span className='text-blue-500 text-[30px]'>Гарантія Lite</span>
            </div>
            <div className='my-6'>
              <div className='text-[18px] flex items-center  mt-2 '>
                <IoIosCheckmark className='text-[30px] text-blue-500' />
                <p>Гарантія In-Apple 30 днів - це турбота про Ваш iPhone, iPad, Macbook та Apple Watch.</p>
              </div>
              <div className='text-[18px] flex items-center  mt-2 '>
                <IoIosCheckmark className='text-[30px] text-blue-500' />
                <p>Гарантійне обслуговування. У разі виявлення заводського дефекту,<br /> ми зробимо заміну пристрою на новий.</p>
              </div>
              <div className='text-[18px] flex items-center  mt-2 '>
                <IoIosCheckmark className='text-[30px] text-blue-500' />
                <p>Після закінченя 30 днів, ремонтом пристрою займається Авторизований Сервісний центр<br /> згідно правилам компанії Apple</p>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-white mt-5 px-10 py-4 flex items-center mb-16'>
          <div className='my-5'>
            <div className=' text-[25px] mb-3'>Турбота про вашу техніку Apple</div>
            <div className='w-2/3 mb-3'>Наш багаторічний досвід продажу техніки Apple та роботи з нею складно переоцінити. Саме досвід, а також спеціальна підготовка роблять наших технічних експертів одними з найкращих в країні. Спеціально для покупців інтернет-магазину In-Apple ми розширюємо стандартну гарантію Apple на її пристрої, надаючи цілу низку переваг за демократичною ціною.</div>
            <div className='w-2/3 mb-3'>Не залежно від пристрою, який ви вирішили купити в інтернет-магазині In-Apple, з пакетом послуг In-Apple Care чи In-Apple Care+ (в пер. з англ. «турбота In-Apple») ви отримуєте два роки повноцінної гарантії з безкоштовним ремонтом по гарантійним випадкам та безкоштовними технічними консультаціями впродовж всього строку. Додаткові переваги в межах обраного пакету послуг ми надаємо, в залежності від вашого «яблучного» пристрою.</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts
