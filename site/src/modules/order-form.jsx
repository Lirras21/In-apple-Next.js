import React, { useState } from 'react';

const OrderForm = ({ showModal, setShowModal, items }) => {
  const [firstName, setFirstName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');

  const [firstNameError, setFirstNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [cityError, setCityError] = useState('');

  const forms = [
    { type: 'text', placeholder: "Ім'я", autoComplete: 'name', value: firstName, onChange: (e) => setFirstName(e.target.value), error: firstNameError },
    { type: 'tel', placeholder: "Телефон", autoComplete: 'tel', value: phone, onChange: (e) => setPhone(e.target.value), error: phoneError },
    { type: 'email', placeholder: "Email", autoComplete: 'email', value: email, onChange: (e) => setEmail(e.target.value), error: emailError },
    { type: 'text', placeholder: "Місто", autoComplete: 'address-level2', value: city, onChange: (e) => setCity(e.target.value), error: cityError },

  ]

  const [customersOrders, setCustomersOrders] = useState([])
  
  const handleButtonClick = () => {
    setFirstNameError(firstName === '' ? 'Це поле необхідно заповнити.' : '');
    setPhoneError(phone === '' ? 'Це поле необхідно заповнити.' : '');
    setEmailError(email === '' ? 'Це поле необхідно заповнити.' : '');
    setCityError(city === '' ? 'Це поле необхідно заповнити.' : '');

    const currentOrder = { firstName, phone, email, city, items };

    setCustomersOrders([...customersOrders, currentOrder]);
    
    if (firstName !== '' && phone !== '' && email !== '' && city !== '') {
      console.log('Дані відправлені:', { firstName, phone, email, city });
      setShowModal(!showModal)
    }
  };
  console.log(customersOrders)

  return (
    <div className='flex flex-col gap-6 items-center'>
      <div className='w-5/6 flex flex-col gap-6 my-5'>
        {forms.map((form) => (
          <div key={form.placeholder} className={`h-14 border-2 border-gray-300 ${form.error && 'border-red-500'}`}>
            <input
              type={form.type}
              placeholder={form.placeholder}
              autoComplete={form.autoComplete}
              required
              className='w-full h-full pl-3'
              value={form.value}
              onChange={form.onChange}
            />
            {form.error && <p className='text-red-500  text-[12px]  text-start'>{form.error}</p>}
          </div>
        ))}
      </div>

      <button
        className='mb-10 text-center w-5/6 h-14 text-white bg-black hover:invert hover:border-2 duration-500'
        onClick={handleButtonClick}
      >
        ОФОРМИТИ ЗАМОВЛЕННЯ
      </button>
    </div>
  );
};

export default OrderForm;
