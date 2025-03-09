    $(document).ready(function () {
        $('#example').DataTable();
    });

    function getSubmissions() {
        const submissions = localStorage.getItem('formSubmissions');
        return submissions ? JSON.parse(submissions) : [];
    }

    function updateListingView() {
        const tableBody = document.getElementById('tableBody');
        const submissions = getSubmissions();

        for (let i = 0; i < submissions.length; i++) {
            const submission = submissions[i];

            const row = document.createElement('tr');

            const imgCell = document.createElement('td');
            imgCell.innerHTML = `<img src="images/tour${i + 1}.jpeg" alt="Image" class="img-fluid rounded-circle" width="40px">`;
            row.appendChild(imgCell);

            const idCell = document.createElement('td');
            idCell.textContent = i + 1;
            row.appendChild(idCell);

            const titleCell = document.createElement('td');
            titleCell.innerHTML = `<a href="#">${submission.title}</a>`;
            row.appendChild(titleCell);

            const countryCell = document.createElement('td');
            countryCell.innerHTML = `<a href="#">${submission.state}</a>`;
            row.appendChild(countryCell);

            const durationCell = document.createElement('td');
            durationCell.textContent = submission.duration;
            row.appendChild(durationCell);

            const costCell = document.createElement('td');
            costCell.textContent = `$${submission.cost}`;
            row.appendChild(costCell);

            const statusCell = document.createElement('td');
            statusCell.innerHTML = `<a href="#">Pending</a>`; 
            row.appendChild(statusCell);

            const actionCell = document.createElement('td');
            actionCell.innerHTML = `<a href="#"><i class="fas fa-edit"></i></a>
                                    <a href="#"><i class="fas fa-trash-alt"></i></a>`;
            row.appendChild(actionCell);

            tableBody.appendChild(row);
        }
    }

    function handleSubmit(event) {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);

        const submission = {};
        formData.forEach((value, key) => {
            submission[key] = value;
        });

        submission.status = "Pending";

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

    function updateListingView() {
        const tableBody = document.getElementById('tableBody');
        const submissions = getSubmissions();

        // Sort the submissions array by id in ascending order
        submissions.sort((a, b) => a.id - b.id);

        for (let i = 0; i < submissions.length; i++) {
            const submission = submissions[i];

            const row = document.createElement('tr');

            // ... Create cells for other data ...

            // ID (Number) cell
            const idCell = document.createElement('td');
            idCell.textContent = submission.id;
            row.appendChild(idCell);

            // ... Create other cells ...

            tableBody.appendChild(row);
        }
    }
