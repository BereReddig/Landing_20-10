/*--------------------------- 
BACK4APP
--------------------------- */
Parse.initialize(
  'w2CsQkHzUv9oLF71QNmqgxw9p1OskOuasvkKSL2z',
  'kLCIoTLojIPQK4rGK1ybQlXnPFI1a0skNgNoBcyS'
); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
Parse.serverURL = 'https://parseapi.back4app.com/';

//Reading data object from Back4App
async function renderCustomers() {
  const query = new Parse.Query('customers');

  try {
    const customer_1 = await query.get('ar8NU8Xv1f');
    const name_1 = customer_1.get('name');
    const role_1 = customer_1.get('role');

    const customer_2 = await query.get('YARt5Z5smp');
    const name_2 = customer_2.get('name');
    const role_2 = customer_2.get('role');

    const customer_3 = await query.get('Of2Z8tvGBV');
    const name_3 = customer_3.get('name');
    const role_3 = customer_3.get('role');

    document.getElementById('customer-1').innerHTML = name_1;
    document.getElementById('customer-role-1').innerHTML = role_1;

    document.getElementById('customer-2').innerHTML = name_2;
    document.getElementById('customer-role-2').innerHTML = role_2;

    document.getElementById('customer-3').innerHTML = name_3;
    document.getElementById('customer-role-3').innerHTML = role_3;
  } catch (error) {
    Rollbar.error('BACK4APP failed to retrieve object', error);
  }
}

export default renderCustomers;
