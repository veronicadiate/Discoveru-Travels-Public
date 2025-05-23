
  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const submission = {};
    formData.forEach((value, key) => {
      submission[key] = value;
    });

    const submissions = localStorage.getItem('formSubmissions');
    const parsedSubmissions = submissions ? JSON.parse(submissions) : [];

    parsedSubmissions.push(submission);

    localStorage.setItem('formSubmissions', JSON.stringify(parsedSubmissions));

    form.reset();

    alert("Your Ad has been submitted and is pending for approval!");
    window.location.href = 'listing-all.html';
  }

  function saveDraft() {
    const formData = {
      title: document.getElementById('inputGroupSelect00').value,
      state: document.getElementById('inputGroupSelect01').value,
      city: document.getElementById('inputGroupSelect02').value,
      seats: document.getElementById('inputGroupSelect03').value,
      duration: document.getElementById('inputGroupSelect04').value,
      cost: document.getElementById('inputGroupSelect05').value,
      airline: document.getElementById('inputGroupSelect06').value,
      accomodation: document.getElementById('inputGroupSelect07').value,
      baggage: document.getElementById('inputGroupSelect08').value,
      layover: document.getElementById('inputGroupSelect09').value,
      flightDuration: document.getElementById('inputGroupSelect10').value,
      inFlightAmmenities: document.getElementById('inputGroupSelect11').value,
      start: document.getElementById('inputGroupSelect12').value,
      expiry: document.getElementById('inputGroupSelect13').value,
      coordinates: document.getElementById('exampleFormControlTextarea1').value,
      others: document.getElementById('exampleFormControlTextarea1').value,
      spots: document.getElementById('exampleFormControlTextarea1').value
    };

    const drafts = JSON.parse(localStorage.getItem('drafts')) || [];

    drafts.push(formData);

    localStorage.setItem('drafts', JSON.stringify(drafts));

    alert('Ad saved in draft!');
    window.location.href = 'listing-drafts.html';
  }

  function formatData(data) {
    return data !== '' ? data : '<blank>';
  }

  function deleteDraft(index) {
    const drafts = JSON.parse(localStorage.getItem('drafts')) || [];
    drafts.splice(index, 1);
    localStorage.setItem('drafts', JSON.stringify(drafts));
    location.reload();
  }

  function confirmCancel() {
    const confirmation = confirm("Are you sure you want to cancel the form submission?");

    if (confirmation) {
      window.location.href = "listing-all.html";
    } else {
      window.location.href = "#";
    }
  }

  function editDraft(index) {
    const drafts = JSON.parse(localStorage.getItem('drafts')) || [];
    const draft = drafts[index];
    const encodedDraft = encodeURIComponent(JSON.stringify(draft));
    window.location.href = `listing-create.html?draft=${encodedDraft}`;
  }

  document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const draftParam = urlParams.get('draft');

    if (draftParam) {
      const draft = JSON.parse(decodeURIComponent(draftParam));

      document.getElementById('inputGroupSelect00').value = draft.title;
      document.getElementById('inputGroupSelect01').value = draft.state;
      document.getElementById('inputGroupSelect03').value = draft.city;
    }
  });

  const form = document.getElementById('myForm');
  form.addEventListener('submit', handleSubmit);

  const saveDraftBtn = document.getElementById('saveDraftBtn');
  saveDraftBtn.addEventListener('click', saveDraft);

  const tableBody = document.getElementById('tableBody');
  const drafts = JSON.parse(localStorage.getItem('drafts')) || [];
  let tableHtml = '';

  drafts.forEach((draft, index) => {
    tableHtml += `
      <tr>
        <td><img src="${draft.img || 'path-to-default-image.jpg'}" alt="Image"></td>
        <td>${index + 1}</td>
        <td>${formatData(draft.title)}</td>
        <td>${formatData(draft.state)}</td>
        <td>${formatData(draft.duration)}</td>
        <td>${formatData(draft.cost)}</td>
        <td>Draft</td>
        <td>
          <button onclick="editDraft(${index})" class="btn btn-primary">Edit</button>
          <button onclick="deleteDraft(${index})" class="btn btn-danger">Delete</button>
        </td>
      </tr>
    `;
  });

  tableBody.innerHTML = tableHtml;
