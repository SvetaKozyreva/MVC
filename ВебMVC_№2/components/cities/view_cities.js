

export default class ViewCities{
    DOM_TABLE = document.querySelector('.city-table table');

    renderData({ formatData, names }){
        const html = `
            ${ this.getTableHead(names) }
            <tbody>
                ${ this.getTableBody(formatData)}
            <tbody>
        `;

        this.DOM_TABLE.innerHTML = html;
    }

    getTableHead([n,name,pop]){
        return `<thead>
                    <tr>
                        <th scope="col">${n}</th>
                        <th scope="col">${ name }</th>
                        <th scope="col">${ pop }</th>
                    </tr>
                </thead>`;
    }

    getTableBody(data){
        return data.map(({ id, Student, Specialty }) =>{
            return `
            <tr>
                <th scope="row">${id}</th>
                <td>${Student}</td>
                <td>${Specialty}</td>
            </tr>`;
        }).join(' ');
    }
}