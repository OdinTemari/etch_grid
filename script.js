function createGridCells(n) {
    // Function creates nxn number of grid cells in the given width across the screen
    let gridcontainer= document.getElementById('gridcontainer');

    for (let nrows=1;nrows<=n; nrows++) {
        for (let ncols=1; ncols<=n; ncols++) {
            let gridcell= document.createElement('div');
            gridcell.style.width= 500/n-2+'px';
            gridcell.style.height= 500/n-2+'px';

            gridcell.classList.add('gridcell'); // give the id for css manipulation
            gridcell.dataset.shade=180;  // set initial data for each cell (meanse rgb(180,180,180))
            
            // Add a mouseover event for shading to each grid cell created.
            gridcell.addEventListener('mouseover', function(){
                // for each mouseover, decrease the shade data value 
                let currentShade= this.dataset.shade-30; 
                if (currentShade<0) {currentShade=0;}

                //... and apply it to the object
                this.style.backgroundColor= 'rgb('+currentShade+', '+currentShade+', '+ currentShade+')'; //'black';
                
                // also save the data set, for reference on subsequent mouseover actions.
                this.dataset.shade= currentShade;
            })
            
            gridcontainer.appendChild(gridcell);
        }
    }
}

function colorCell(grid){
    
}
createGridCells(20);

//const container= document.getElementById('grids-container');
//const grid= document.createElement('p');
//container.appendchild(grid);
