var CoolBox = function(options)
{
    //Preload the loading image.
    var fbLoaderGif = new Image();
    fbLoaderGif.src = "img/fbloader.gif";
   
    
    options = options || {};

    options.width = options.width || 400;
    options.height = options.height || 300;

    //The main box that encapsulates the entire plugin.
    var box = document.createElement('div');
    box.className = 'cool-box box';

    var content = document.createElement('div');
    content.className ='cool-box content'
    box.appendChild(content);

    //Top blue bar that holds the text title. This is hidden, unless a title is
    //specified.
    var titleBar = document.createElement('div');
    titleBar.className = 'cool-box title-bar';
    titleBar.style.display = 'none';
    content.appendChild(titleBar);

    //The actual text title.
    var title = document.createElement('span');
    title.className = 'cool-box title';
    titleBar.appendChild(title);

    //Create the loading image container. This will span accross the body of the 
    //box but will be initially hidden.
    var loader = document.createElement('div');
    loader.className = 'cool-box body loader';
    loader.style.display = 'none';
    content.appendChild(loader);
    
    //The body is where the actual content i.e. headers and images are placed.
    //The body does not contain either the top title or the bottom control 
    //buttons. 
    var body = document.createElement('div');
    body.className = 'cool-box body';
    content.appendChild(body);

    //The controls represent the bottom bar for containg bottoms.
    var controls = document.createElement('div');
    controls.className = 'cool-box controls';
    controls.style.display = 'none';
    content.appendChild(controls);

    
    

    /**
     * Cross-browser compatible method for retreiving window width.
     */
    var getWindowWidth = function()
    {
        return window.innerWidth || document.body.clientWidth;
    }
    
    /**
     * Cross-browser compatible method for retreiving window height.
     */
    var getWindowHeight = function()
    {
        return window.innerHeight || document.body.clientHeight;
    }

    /**
     * Sets the title on the top bar. If the specified text is null or undefined
     * then the method will not have any effect.
     */
    this.setTitle = function(text)
    {
        if(text){
            title.innerHTML = text;
            titleBar.style.display = 'block';
        }
    }

    this.addButton = function(label, callback, grey)
    {
        //By default he button is blue.
        grey = grey || false;

        if(label){

            var button = document.createElement('button');


            button.innerHTML = label;
            button.className = 'cool-box button ' + ((grey)? 'grey' : '');

            if(callback){
                button.onclick = callback;
            }

            controls.appendChild(button);

            controls.style.display = 'block';
        }

    };
    
    this.loading = function(isLoading){
        loader.style.display = (isLoading) ? 'block' : 'none';
        body.style.display = (isLoading) ? 'none' : 'block';
    }

    
    this.show = function(){

        //Update the box's width and height according to the set options.
        box.style.width = options.width + "px";
        box.style.height = options.height + "px";

        //Horizontally center the box on the visible screen.
        box.style.left = (getWindowWidth() / 2 - options.width / 2) + "px";
        box.style.top = (getWindowHeight() / 2 - options.height / 3 * 2) + "px";

        //Display the block.
        box.style.display = 'block';
    }

    this.addContent = function(content){
        body.appendChild(content);
    }

    this.hide = function()
    {
        box.style.display = 'none';
    }


    this.hide();
    document.body.appendChild(box);

}