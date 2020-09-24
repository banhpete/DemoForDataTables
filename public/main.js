// Table Data ------------------------------------------------------------------------------------------------------------------------------
var invoiceData = [
  { id: 1, name: 'Oswald Chisman', order_date: '1/20/2020', ship_date: '9/18/2020', ordered: 77, filled: 70, total_pending: 39.03, payments: 30.46, notes: "", billing_address: "123 Fake Street", shipping_address: "321 Fake Avenue" },
  { id: 2, name: 'Gizela Heskin', order_date: '5/26/2020', ship_date: '10/17/2019', ordered: 2, filled: 41, total_pending: 86.55, payments: 70.32, notes: "", billing_address: "123 Fake Street", shipping_address: "321 Fake Avenue" },
  { id: 3, name: 'Merrily Eate', order_date: '1/6/2020', ship_date: '10/11/2019', ordered: 86, filled: 96, total_pending: 33.02, payments: 6.62, notes: "", billing_address: "123 Fake Street", shipping_address: "321 Fake Avenue" },
  { id: 4, name: 'Alfie Vickery', order_date: '1/31/2020', ship_date: '12/27/2019', ordered: 8, filled: 65, total_pending: 85.98, payments: 84.06, notes: "", billing_address: "123 Fake Street", shipping_address: "321 Fake Avenue" },
  { id: 5, name: 'Genovera Sennett', order_date: '12/5/2019', ship_date: '2/11/2020', ordered: 33, filled: 83, total_pending: 29.34, payments: 9.2, notes: "", billing_address: "123 Fake Street", shipping_address: "321 Fake Avenue" },
  { id: 6, name: 'Emanuel Cashen', order_date: '7/31/2020', ship_date: '8/5/2020', ordered: 3, filled: 59, total_pending: 92.98, payments: 3.05, notes: "", billing_address: "123 Fake Street", shipping_address: "321 Fake Avenue" },
  { id: 7, name: 'Nobie Boutwell', order_date: '11/10/2019', ship_date: '3/18/2020', ordered: 74, filled: 5, total_pending: 45.48, payments: 82.96, notes: "", billing_address: "123 Fake Street", shipping_address: "321 Fake Avenue" },
  { id: 8, name: 'Ilsa Buttriss', order_date: '12/5/2019', ship_date: '12/31/2019', ordered: 17, filled: 63, total_pending: 16.45, payments: 58.48, notes: "", billing_address: "123 Fake Street", shipping_address: "321 Fake Avenue" },
  { id: 9, name: 'Kylie Syrie', order_date: '1/26/2020', ship_date: '8/22/2020', ordered: 22, filled: 62, total_pending: 22.52, payments: 68.55, notes: "", billing_address: "123 Fake Street", shipping_address: "321 Fake Avenue" },
  { id: 10, name: 'Angelia Mauser', order_date: '10/26/2019', ship_date: '11/6/2019', ordered: 63, filled: 53, total_pending: 44.02, payments: 56.8, notes: "", billing_address: "123 Fake Street", shipping_address: "321 Fake Avenue" },
  { id: 11, name: 'Arliene Antognozzii', order_date: '4/28/2020', ship_date: '1/12/2020', ordered: 58, filled: 64, total_pending: 11.5, payments: 99.6, notes: "", billing_address: "123 Fake Street", shipping_address: "321 Fake Avenue" },
  { id: 12, name: 'Rennie Crosland', order_date: '7/25/2020', ship_date: '7/25/2020', ordered: 56, filled: 12, total_pending: 5.66, payments: 90.5, notes: "", billing_address: "123 Fake Street", shipping_address: "321 Fake Avenue" },
  { id: 13, name: 'Tessi Laurant', order_date: '9/8/2020', ship_date: '5/22/2020', ordered: 79, filled: 21, total_pending: 4.86, payments: 15.58, notes: "", billing_address: "123 Fake Street", shipping_address: "321 Fake Avenue" },
  { id: 14, name: 'Dru Houseley', order_date: '10/21/2019', ship_date: '12/13/2019', ordered: 99, filled: 10, total_pending: 70.5, payments: 55.47, notes: "", billing_address: "123 Fake Street", shipping_address: "321 Fake Avenue" },
  { id: 15, name: 'Vivyan Badsey', order_date: '11/20/2019', ship_date: '7/12/2020', ordered: 53, filled: 94, total_pending: 42.87, payments: 61.7, notes: "", billing_address: "123 Fake Street", shipping_address: "321 Fake Avenue" },
  { id: 16, name: 'Anatol Richardes', order_date: '9/24/2019', ship_date: '11/19/2019', ordered: 98, filled: 36, total_pending: 7.42, payments: 24.28, notes: "", billing_address: "123 Fake Street", shipping_address: "321 Fake Avenue" },
  { id: 17, name: 'Tove Simmon', order_date: '5/12/2020', ship_date: '6/2/2020', ordered: 48, filled: 39, total_pending: 52.13, payments: 42.77, notes: "", billing_address: "123 Fake Street", shipping_address: "321 Fake Avenue" },
  { id: 18, name: 'Algernon Deam', order_date: '5/1/2020', ship_date: '12/11/2019', ordered: 6, filled: 24, total_pending: 75.83, payments: 42.82, notes: "", billing_address: "123 Fake Street", shipping_address: "321 Fake Avenue" },
  { id: 19, name: 'Gretchen Loutheane', order_date: '7/2/2020', ship_date: '7/17/2020', ordered: 64, filled: 98, total_pending: 49.06, payments: 16.66, notes: "", billing_address: "123 Fake Street", shipping_address: "321 Fake Avenue" },
  { id: 20, name: 'Gena Cunnow', order_date: '8/1/2020', ship_date: '6/22/2020', ordered: 21, filled: 29, total_pending: 34.38, payments: 33.11, notes: "", billing_address: "123 Fake Street", shipping_address: "321 Fake Avenue" },
  { id: 21, name: 'Udale Aspel', order_date: '2/25/2020', ship_date: '11/15/2019', ordered: 29, filled: 59, total_pending: 15.64, payments: 66.07, notes: "", billing_address: "123 Fake Street", shipping_address: "321 Fake Avenue" },
  { id: 22, name: 'Dunstan Le Batteur', order_date: '2/10/2020', ship_date: '1/30/2020', ordered: 60, filled: 53, total_pending: 59.33, payments: 73.27, notes: "", billing_address: "123 Fake Street", shipping_address: "321 Fake Avenue" },
  { id: 23, name: 'Hannah Oylett', order_date: '7/25/2020', ship_date: '3/16/2020', ordered: 8, filled: 35, total_pending: 75.84, payments: 20.87, notes: "", billing_address: "123 Fake Street", shipping_address: "321 Fake Avenue" },
]

// DOM Elements ------------------------------------------------------------------------------------------------------------------------------
// Table
var body = $('body')
var domTable = $('#invoice_table')
var domTableBody = $('#invoice_table tbody')
var dataTable = domTable.DataTable();

// Data Modal
var modal = $('#modal1')
var modalSaveBtn = $('#modal-save')
var modalDelBtn = $('#modal-delete')
var modalEditBtn = $('#modal-edit')
var modalCloseBtn = $('#modal-closeBtn')
var modalClose = $('#modal-close')

// Confirmation Modal
var modalConfirmation = $('#modal2')
var modalConfirmationYes = $('#modal2-yes')
var modalConfirmationNo = $('#modal2-no')

// Edit Modal
var modalEdit = $('#modal3')
var modalEditSaveBtn = $('#modal3-save')
var modalEditCloseBtn = $('#modal3-closeBtn')
var modalEditClose = $('#modal3-close')

// App State ------------------------------------------------------------------------------------------------------------------------------
var selectedData = null;

// Event Handlers for Table ---------------------------------------------------------------------------------------------------------------
domTableBody.on('click', 'tr', function (e) {

  if ($(this).hasClass('selected')) {
    $(this).removeClass('selected');
  }
  else {
    dataTable.$('tr.selected').removeClass('selected');
    $(this).addClass('selected');
  }

  selectedData = findDataById(dataTable.row(this).data()[0])

  // Modify Modal based on data 
  modal.find('.modal-title').text(`Invoice ${selectedData.id}`)
  modal.find('#modal-name').text(`${selectedData.name}`)
  modal.find('#modal-address').text(`${selectedData.billing_address}`)
  modal.find('#modal-shippingName').text(`${selectedData.name}`)
  modal.find('#modal-shippingAddress').text(`${selectedData.shipping_address}`)
  modal.find('#modal-shipDate').text(`${selectedData.ship_date}`)
  modal.find('#modal-orderDate').text(`${selectedData.order_date}`)
  modal.find('#modal-ordered').text(`${selectedData.ordered}`)
  modal.find('#modal-filled').text(`${selectedData.filled}`)
  modal.find('#modal-total').text(`$${selectedData.total_pending}`)
  modal.find('#modal-payment').text(`$${selectedData.payments}`)
  modal.modal('show')
})

// Event Handler for Modal 1 - Table Data ---------------------------------------------------------------------------------------
modalDelBtn.on('click', function (e) {
  invoiceData = invoiceData.filter((row) => row.id !== selectedData.id)
  modalConfirmation.find('#modal2-conf-msg').text(`Are you sure you want to delete invoice ${selectedData.id}`)
  modal.modal('hide')
  modalConfirmation.modal('show');
})

modalEditBtn.on('click', function (e) {
  modal.modal('hide')

  // Modify ModalEdit based on data
  modalEdit.find('.modal-title').val(`Invoice ${selectedData.id}`)
  modalEdit.find('#modal3-name').val(`${selectedData.name}`)
  modalEdit.find('#modal3-address').val(`${selectedData.billing_address}`)
  modalEdit.find('#modal3-shippingName').val(`${selectedData.name}`)
  modalEdit.find('#modal3-shippingAddress').val(`${selectedData.shipping_address}`)
  modalEdit.find('#modal3-shipDate').val(`${selectedData.ship_date}`)
  modalEdit.find('#modal3-orderDate').val(`${selectedData.order_date}`)
  modalEdit.find('#modal3-ordered').val(`${selectedData.ordered}`)
  modalEdit.find('#modal3-filled').val(`${selectedData.filled}`)
  modalEdit.find('#modal3-total').val(`$${selectedData.total_pending}`)
  modalEdit.find('#modal3-payment').val(`$${selectedData.payments}`)
  modalEdit.modal('show')
  modalEdit.find('.modal-title').text(`Edit Invoice ${selectedData.id}`)
})

modalCloseBtn.on('click', function (e) {
  modal.modal('hide')
})

modalClose.on('click', function (e) {
  modal.modal('hide')
})

// Event Handler for Modal 2 - Confirmation ---------------------------------------------------------------------------------------
modalConfirmationYes.on('click', function (e) {
  if (modalEditSaveBtn.attr('disabled') === "disabled") {
    dataTable.row('.selected').remove().draw(false);
    modalConfirmation.modal('hide')
  } else {
    modalConfirmation.modal('hide')
    console.log('clicked Yes')
    modalEditSaveBtn.attr("disabled", true)
  }
})

modalConfirmationNo.on('click', function (e) {
  if (modalEditSaveBtn.attr('disabled') === "disabled") {
    modalConfirmation.modal('hide')
    modal.modal('show')
  } else {
    modalConfirmation.modal('hide')
    modalEdit.modal('show')
  }
})

// Event Handler for Modal 3 - Editting ---------------------------------------------------------------------------------------
modalEdit.on('keydown', function (e) {
  if (e.key !== "Escape") {
    modalEditSaveBtn.attr("disabled", false)
  }
})

modalEditClose.on('click', function (e) {
  if (modalEditSaveBtn.attr('disabled') === 'disabled') {
    modalEdit.modal('hide')
    modal.modal('show')
    modalEditSaveBtn.attr("disabled", true)
  } else {
    modalConfirmation.find('#modal2-conf-msg').text(`Changes for Invoice ${selectedData.id} was not saved - Discard Changes?`)
    modalConfirmation.modal('show');
    modalEdit.modal('hide')
  }
})

modalEditCloseBtn.on('click', function (e) {
  if (modalEditSaveBtn.attr('disabled') === 'disabled') {
    modalEdit.modal('hide')
    modal.modal('show')
    modalEditSaveBtn.attr("disabled", true)
  } else {
    modalConfirmation.find('#modal2-conf-msg').text(`Changes for Invoice ${selectedData.id} was not saved - Discard Changes?`)
    modalConfirmation.modal('show');
    modalEdit.modal('hide')
  }
})

modalEditSaveBtn.on('click', function (e) {
  let name = modalEdit.find('#modal3-name').val()
  let orderDate = modalEdit.find('#modal3-orderDate').val()
  let shipDate = modalEdit.find('#modal3-shipDate').val()
  let ordered = modalEdit.find('#modal3-ordered').val()
  let filled = modalEdit.find('#modal3-filled').val()
  let total = modalEdit.find('#modal3-total').val()
  let payment = modalEdit.find('#modal3-payment').val()
  let shippingAddress = modalEdit.find('#modal3-shippingAddress').val()
  let billingAdress = modalEdit.find('#modal3-address').val()

  selectedData = {
    ...selectedData,
    name,
    order_date: orderDate,
    ship_date: shipDate,
    ordered,
    filled,
    total_pending: total,
    payments: payment,
    billing_address: billingAdress,
    shipping_address: shippingAddress
  }

  console.log(selectedData)

  updateDataById(selectedData.id, selectedData)

  dataTable.row('.selected').data([
    selectedData.id,
    selectedData.name,
    selectedData.order_date,
    selectedData.ship_date,
    selectedData.ordered,
    selectedData.filled,
    selectedData.total_pending,
    selectedData.payments
  ])

  modal.find('.modal-title').text(`Invoice ${selectedData.id}`)
  modal.find('#modal-name').text(`${selectedData.name}`)
  modal.find('#modal-address').text(`${selectedData.billing_address}`)
  modal.find('#modal-shippingName').text(`${selectedData.name}`)
  modal.find('#modal-shippingAddress').text(`${selectedData.shipping_address}`)
  modal.find('#modal-shipDate').text(`${selectedData.ship_date}`)
  modal.find('#modal-orderDate').text(`${selectedData.order_date}`)
  modal.find('#modal-ordered').text(`${selectedData.ordered}`)
  modal.find('#modal-filled').text(`${selectedData.filled}`)
  modal.find('#modal-total').text(`$${selectedData.total_pending}`)
  modal.find('#modal-payment').text(`$${selectedData.payments}`)

  modal.modal('show')
  modalEdit.modal('hide')
  modalEditSaveBtn.attr("disabled", true)

})

// Populate Table ------------------------------------------------------------------------------------------------------------------------------
function populatetable(table, data) {
  data.forEach((row) => {
    table.row.add([row.id, row.name, row.order_date, row.ship_date, row.ordered, row.filled, row.total_pending, row.payments]).draw(false)
  })
}

// Load Data ------------------------------------------------------------------------------------------------------------------------------
$(document).ready(function () {
  populatetable(dataTable, invoiceData);
});

// Functions to interact with inovice data ------------------------------------------------------------------------------------------------------------------------------
function findDataById(id) {
  // Assuming row/index is aligned. Otherwise more complex algorithim must be written
  return invoiceData[id - 1]
}

function updateDataById(id, newRow) {
  invoiceData[id - 1] = newRow
}