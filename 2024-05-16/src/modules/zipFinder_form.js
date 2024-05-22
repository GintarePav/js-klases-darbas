const form = () => {
  return `
    <div class="form-group mb-3">
    <input type="text" class="form-control term" placeholder="Address"/>
    </div>
    <div class="form-group mb-3">
    <input type="text" class="form-control result" placeholder="Zip Code" readonly/>
    </div>
    <button id="search-btn" type="submit" class="btn btn-dark mb-1">Search</button>
    `;
};

export default form;
