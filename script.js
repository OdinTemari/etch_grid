function createGridCells(n) {
    // Function creates nxn number of grid cells in the given width across the screen
    let gridcontainer= document.getElementById('gridcontainer');

    for (let nrows=1;nrows<=n; nrows++) {
        for (let ncols=1; ncols<=n; ncols++) {
            let gridcell= document.createElement('div');
            gridcell.style.width= 500/n-2+'px';
            gridcell.style.height= 500/n-2+'px';

            gridcell.classList.add('gridcell'); // give the id for css manipulation

            gridcontainer.appendChild(gridcell);
         
            
        }
    }
}

createGridCells(16);

//const container= document.getElementById('grids-container');
//const grid= document.createElement('p');
//container.appendchild(grid);
