/* create table from get data (all submitted from from)--> */

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
	            statusCell.innerHTML = `<a href="#" style = "color: orange">Pending</a>`; 
	            row.appendChild(statusCell);

	            const actionCell = document.createElement('td');
	            actionCell.innerHTML = `<a href="#"><i class="fas fa-edit"></i></a>
	                                    <a href="#"><i class="fas fa-trash-alt"></i></a>`;
	            row.appendChild(actionCell);

	            tableBody.appendChild(row);
	        }
	    }

	    updateListingView();