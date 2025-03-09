
        
      function getSubmissions() {
        const submissions = localStorage.getItem('formSubmissions');
        return submissions ? JSON.parse(submissions) : [];
      }

      function getDrafts() {
        const drafts = localStorage.getItem('drafts');
        return drafts ? JSON.parse(drafts) : [];
      }

      function updateListingView() {
        const tableBody = document.getElementById('tableBody');
        const submissions = getSubmissions();
        const drafts = getDrafts();

        const allEntries = [...submissions, ...drafts];

        for (let i = 0; i < allEntries.length; i++) {
          const entry = allEntries[i];

          const row = document.createElement('tr');

          const imgCell = document.createElement('td');
          imgCell.innerHTML = `<img src="images/tour${i + 1}.jpeg" alt="Image" class="img-fluid rounded-circle" width="40px">`;
          row.appendChild(imgCell);

          const idCell = document.createElement('td');
          idCell.textContent = i + 1;
          row.appendChild(idCell);

          const titleCell = document.createElement('td');
          titleCell.innerHTML = `<a href="#">${entry.title}</a>`;
          row.appendChild(titleCell);

          const countryCell = document.createElement('td');
          countryCell.innerHTML = `<a href="#">${entry.state}</a>`;
          row.appendChild(countryCell);

          const durationCell = document.createElement('td');
          durationCell.textContent = entry.duration;
          row.appendChild(durationCell);

          const costCell = document.createElement('td');
          costCell.textContent = `$${entry.cost}`;
          row.appendChild(costCell);

          const statusCell = document.createElement('td');
          statusCell.textContent = entry.hasOwnProperty('status') ? entry.status : 'Draft';
          row.appendChild(statusCell);

          const actionCell = document.createElement('td');
          actionCell.innerHTML = `<a href="#"><i class="fas fa-edit"></i></a>
                                  <a href="#"><i class="fas fa-trash-alt"></i></a>`;
          row.appendChild(actionCell);

          tableBody.appendChild(row);
        }
      }

      updateListingView();
