import Link from 'next/link'
import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { IoIosCheckmark } from "react-icons/io";
import { FaMoneyBillWave } from "react-icons/fa";

function Delivery() {
  return (
    <div className='flex justify-center bg-gray-100 '>
      <div className='w-[75%] '>
        <div>
          <div className='flex w-[75%] gap-4 text-sm mt-6'>
            <Link href='/'>Головна</Link>
            <span className='text-black cursor-default'>•</span>
            <h1>Доставка і оплата</h1>
          </div>
          <div className='text-center mt-12 text-[25px] font-bold '>Доставка і оплата</div>
        </div>
        <div className='bg-white my-10 px-10 py-4'>
          <div className='mb-12 mt-6 border-b ' >
            <div className='flex items-center gap-3'>
              <TbTruckDelivery className='text-[40px] text-blue-500' />
              <span className='text-blue-500 text-[30px]'>Вартість та строки доставки</span>
            </div>
            <div className='mb-6 '>
              <h1 className='text-[24px] mt-3'>Кур'єром по Городку</h1>
              <div className='text-[18px] mt-2 text-gray-400'>
                <div className='flex items-center '>
                  <IoIosCheckmark className='text-[30px] text-blue-500' />
                  <p>Сума від 10 000 грн:</p>
                </div>
                <p>Вартість доставки : 250 грн.</p>
              </div>
              <div className='text-[18px] mt-2 text-gray-400'>
                <div className='flex items-center '>
                  <IoIosCheckmark className='text-[30px] text-blue-500' />
                  <p>Сума для замовлень до 10 000 грн:</p>
                </div>
                <p>Вартість Доставки: 500 грн.</p>
              </div>
              <div className='text-[18px] flex items-center  mt-2 text-gray-400'>
                <IoIosCheckmark className='text-[30px] text-blue-500' />
                <p>Термін Доставки: Протягом 1 робочого дня*.</p>
              </div>
              <div className='text-[18px] flex items-center  mt-2 text-gray-400'>
                <IoIosCheckmark className='text-[30px] text-blue-500' />
                <p>Доставка за межі Києва: Вартість залежить від відстані. Деталі уточнюйте при оформленні замовлення.</p>
              </div>
              <div className='text-[18px] flex items-center  mt-2 text-gray-400'>
                <p>* Для замовлення сформованого до 12:00 та при наявності вільного кур'єра. Для замовлень сформованих після 12:00, терміни доставка можуть змінитися</p>
              </div>
            </div>
          </div>
          <div className='mb-12 border-b'>
            <div className='flex items-center gap-3'>
              <img src="/icon/nova-poshta.png" alt="" />
              <span className=' text-[30px]'>Нова Пошта</span>
            </div>
            <div className='mb-6 '>
              <div className='text-[18px] flex items-center  mt-2 text-gray-400'>
                <IoIosCheckmark className='text-[30px] text-blue-500' />
                <p>Звертаємо Вашу увагу! Обов'язково вимога, перевіряти вміст посилки у відділенні Нової Пошти. </p>
              </div>
              <div className='text-[18px] flex items-center  mt-2 text-gray-400'>
                <IoIosCheckmark className='text-[30px] text-blue-500' />
                <p>Доставка по регіонам України - згідно тарифам перевізника (від 2-х робочих днів).</p>
              </div>
              <div className='text-[18px] flex items-center  mt-2 text-gray-400'>
                <IoIosCheckmark className='text-[30px] text-blue-500' />
                <p>Комісія за післяплату стягується з отримувача у розмірі 2%+20 грн.</p>
              </div>
              <div className='text-[18px] flex items-center  mt-2 text-gray-400'>
                <IoIosCheckmark className='text-[30px] text-blue-500' />
                <p>Відправку замовлень вище 30000 грн. відбувається тільки за повною передоплатою</p>
              </div>
            </div>
          </div>
          <div className='mb-12 pb-10'>
            <div className='mb-6 '>
              <div className='text-[18px] flex items-center  mt-2 text-gray-400'>
                <p>* Доставка по Києву здійснюється кур'єром у пн.-пт. с 12:00 до 21:00.</p>
              </div>
              <div className='text-[18px] flex items-center  mt-2 text-gray-400'>
                <p>** Доставка по регіонам України, здійснюється Новою Поштою.</p>
              </div>
              <div className='text-[18px] flex items-center  mt-2 text-gray-400'>
                <p>*** На привеликий жаль компанія In-Apple призупиняє відправлення накладеним платежем з міркувань безпеки Харківської , Донецької, Дніпропетровської, Миколаївської, Запорізької та Херсонської областей, будь-ласка слідкуйте за оновленою інформацією</p>
              </div>
              <div className='text-[18px] flex items-center  mt-2 text-gray-400'>
                <p>**** Перевірити наявність пристрою у пакувані виробника</p>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-white my-10 px-10 py-4'>
          <div className='mb-12 mt-6 border-b' >
            <div className='flex items-center gap-3'>
              <FaMoneyBillWave className='text-[40px] text-blue-500' />
              <span className='text-blue-500 text-[30px]'>Оплата</span>
            </div>
            <div className='mb-6 '>
              <h1 className='text-[24px] mt-3'>Оплата в інтернет-магазині In-apple.ua</h1>
              <div className='text-[18px] mt-2 text-gray-400'>
                <div className='flex items-center '>
                  <IoIosCheckmark className='text-[30px] text-blue-500' />
                  <p>Готівкою кур'єру.</p>
                </div>
              </div>
              <div className='text-[18px] mt-2 text-gray-400'>
                <div className='flex items-center '>
                  <IoIosCheckmark className='text-[30px] text-blue-500' />
                  <p>Картою в інтернет-магазині.</p>
                </div>
              </div>
              <div className='text-[18px] flex items-center  mt-2 text-gray-400'>
                <IoIosCheckmark className='text-[30px] text-blue-500' />
                <p>Безготівковий розрахунок, згідно рахунку-фактури.</p>
              </div>
            </div>
          </div>
          <div className='mb-12 border-b'>
            <div className='mb-6 '>
              <h1 className='text-[24px] mt-3'>У відділенні Нової Пошти</h1>
              <div className='text-[18px] mt-2 text-gray-400'>
                <div className='flex items-center '>
                  <IoIosCheckmark className='text-[30px] text-blue-500' />
                  <p>Готівкою.</p>
                </div>
              </div>
              <div className='text-[18px] mt-2 text-gray-400'>
                <div className='flex items-center '>
                  <IoIosCheckmark className='text-[30px] text-blue-500' />
                  <p>Карткою.</p>
                </div>
              </div>
              <div className='text-[18px] flex items-center  mt-2 text-gray-400'>
                <IoIosCheckmark className='text-[30px] text-blue-500' />
                <p>Мобільним додатком Нової пошти.</p>
              </div>
            </div>
          </div>
          <div className='mb-12'>
            <div className='mb-6 flex items-center gap-5'>
              <p className='text-[18px] flex items-center w-[75%]  mt-2 text-gray-400'>** У разі оплати за допомогою банківської карти сума до сплати збільшується на 5% від початкової суми замовлення.
                Оплата здійснюється в національній валюті - гривні</p>
              <div className='flex gap-5 h-[40px]'>
                <img src="/icon/visa.png" alt="" />
                <img src="/icon/master.png" alt="" />
                <img src="/icon/privat.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Delivery
