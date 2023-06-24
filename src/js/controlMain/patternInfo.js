export default class PatternInfo {
    
    getPatternSpecifications(headers, contents) {
        const wrapper = document.createElement('div');
        wrapper.classList.add('main__table-wrapper');
        wrapper.classList.add('wrapper-info');
        wrapper.classList.add('specifications');

        for(let i = 0; i < headers.length; i += 1) {
            const row = document.createElement('div');
            row.classList.add('main__table-row');
            // если строка крайняя снизу убираем нижнюю границу 
            if(i === headers.length - 1) row.style.borderBottom = '0'

            const header = document.createElement('div');
            header.classList.add('main__table-row-header');
            header.textContent = headers[i];

            const content = document.createElement('div');
            content.classList.add('main__table-row-content');
            content.textContent = contents[i];

            row.append(header);
            row.append(content);

            wrapper.append(row);
        }

        return wrapper;
    }

    getPatternFiles(names, links) {
        const wrapper = document.createElement('ul');
        wrapper.classList.add('main__wrapper-info-list');
        wrapper.classList.add('wrapper-info');
        wrapper.classList.add('info-files');

        for(let i = 0; i < links.length; i += 1) {
            const wraperItem = document.createElement('li');
            wraperItem.classList.add('main__wrapper-info-item')
            
            const iconPdf = document.createElement('div');
            iconPdf.classList.add('main__icon-pdf');

            const fileName = document.createElement('div');
            fileName.classList.add('main__file-name');
            fileName.textContent = names[i];

            const link = document.createElement('a');
            link.classList.add('main__info-file-link');
            link.href = links[i];


            wraperItem.append(iconPdf);
            wraperItem.append(fileName);
            wraperItem.append(link);

            wrapper.append(wraperItem);
        }

        return wrapper;
    }
}