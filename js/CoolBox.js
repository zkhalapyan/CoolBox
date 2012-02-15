var CoolBox = function(options)
{
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

    var body = document.createElement('div');
    body.className = 'cool-box body';
    content.appendChild(body);

    var controls = document.createElement('div');
    controls.className = 'cool-box controls';
    controls.style.display = 'none';
    content.appendChild(controls);


    var getWindowWidth = function()
    {
        return window.innerWidth || document.body.clientWidth;
    }
    
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

    this.show = function()
    {

        box.style.width = options.width + "px";
        box.style.height = options.height + "px";


        box.style.top = "100px";
        box.style.left = (getWindowWidth() / 2 - options.width / 2) + "px";

        box.style.display = 'block';





    }

    this.hide = function()
    {
        box.style.display = 'none';
    }


    this.hide();
    document.body.appendChild(box);

}