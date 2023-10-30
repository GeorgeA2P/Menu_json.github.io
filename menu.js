fetch('menu.json')
    .then(res => res.json())
    .then(data => {
        const menuContainer = document.getElementById('menu-container');
        data.menuItems.forEach(menuItem => {
            const listItem = document.createElement('li');
            listItem.className = 'dropdown';

            const link = document.createElement('a');
            link.href = '#';
            link.textContent = menuItem.label;

            const submenu = document.createElement('ul');
            submenu.className = 'dropdown-content';

            menuItem.submenu.forEach(submenuItem => {
                const subItem = document.createElement('li');
                const subLink = document.createElement('a');
                subLink.href = '#';
                subLink.textContent = submenuItem;
                subItem.appendChild(subLink);
                submenu.appendChild(subItem);
            });

            listItem.appendChild(link);
            listItem.appendChild(submenu);
            menuContainer.appendChild(listItem);
        });
    })
   .catch(error => console.error('Error al cargar el menu: ' + error));
