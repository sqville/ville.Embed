/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CameraSparkles",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M15.23 1.35 14.88.28a.42.42 0 0 0-.8 0l-.35 1.07a2.2 2.2 0 0 1-1.38 1.4l-1.07.35a.42.42 0 0 0 0 .8l1.07.34a2.2 2.2 0 0 1 1.4 1.4l.35 1.08a.42.42 0 0 0 .8 0l.35-1.07a2.2 2.2 0 0 1 1.4-1.4l1.07-.35a.42.42 0 0 0 0-.8h-.02l-1.08-.35a2.2 2.2 0 0 1-1.4-1.4Zm3.79 6.61.76.25h.02a.3.3 0 0 1 0 .58l-.77.25a1.58 1.58 0 0 0-1 1l-.24.76a.3.3 0 0 1-.58 0l-.24-.77a1.58 1.58 0 0 0-1-1l-.77-.25a.3.3 0 0 1 0-.57l.77-.25a1.58 1.58 0 0 0 .98-1l.25-.76a.3.3 0 0 1 .57 0l.25.77a1.57 1.57 0 0 0 1 1ZM8.12 2h3.29l-.41.15c-.29.1-.54.28-.71.53-.08.1-.14.2-.18.32H8.12a.5.5 0 0 0-.44.28l-.73 1.44A.5.5 0 0 1 6.5 5h-2C3.68 5 3 5.67 3 6.5v8c0 .83.68 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5v-2.6a1.29 1.29 0 0 0 1 0v2.6a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 14.5v-8A2.5 2.5 0 0 1 4.5 4h1.7l.58-1.17c.26-.51.78-.83 1.34-.83ZM10 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-3 4a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z",
    FILLED : "M15.23 1.35 14.88.28a.42.42 0 0 0-.8 0l-.35 1.07a2.2 2.2 0 0 1-1.38 1.4l-1.07.35a.42.42 0 0 0 0 .8l1.07.34a2.2 2.2 0 0 1 1.4 1.4l.35 1.08a.42.42 0 0 0 .8 0l.35-1.07a2.2 2.2 0 0 1 1.4-1.4l1.07-.35a.42.42 0 0 0 0-.8h-.02l-1.08-.35a2.2 2.2 0 0 1-1.4-1.4Zm3.79 6.61.76.25h.02a.3.3 0 0 1 0 .58l-.77.25a1.58 1.58 0 0 0-1 1l-.24.76a.3.3 0 0 1-.58 0l-.24-.77a1.58 1.58 0 0 0-1-1l-.77-.25a.3.3 0 0 1 0-.57l.77-.25a1.58 1.58 0 0 0 .98-1l.25-.76a.3.3 0 0 1 .57 0l.25.77a1.57 1.57 0 0 0 1 1ZM10 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm1-4.85.4-.15H8.13a1.5 1.5 0 0 0-1.34.83L6.2 4H4.5A2.5 2.5 0 0 0 2 6.5v8A2.5 2.5 0 0 0 4.5 17h11a2.5 2.5 0 0 0 2.5-2.5v-2.6a1.29 1.29 0 0 1-1.25-.14c-.23-.16-.4-.39-.49-.65l-.24-.76a.59.59 0 0 0-.14-.23.74.74 0 0 0-.22-.14l-.79-.25A1.31 1.31 0 0 1 14 8.5a1.3 1.3 0 0 1 .05-.63c-.16-.04-.3-.11-.44-.21-.21-.17-.37-.4-.46-.66l-.33-1.13a1.12 1.12 0 0 0-.26-.38l-.06-.06a1 1 0 0 0-.4-.23L11 4.84a1.42 1.42 0 0 1-1-1.34c0-.3.1-.58.29-.82.17-.25.42-.44.71-.53ZM6 10a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z"
  },

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param size {Integer} The size of the icon in px. Sets width and height to this value.
   * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
   * @param iconstyle {String?"regular"} Default is regular. Other allowed value is filled.
   * @param title {String} If included, adds a title tag to the svg root tag. 
   */
  construct (size, color, iconstyle, title)
  {
   super();

   if (size != null) {
    this.setWidth(size);
    this.setHeight(size);
   }

   if (color != null)
    this.setTextColor(color);

   if (iconstyle != null)
    this.setIconStyle(iconstyle);

   if (title != null)
    this.setTitle(title);
   
   //prep regular
   this._htmlregular = this._svgit(this._pathit(this.constructor.REGULAR));
   //prep filled
   this._htmlfilled = this._svgit(this._pathit(this.constructor.FILLED));
   
   if (this.getIconStyle() == "filled")
     this.setHtml(this._htmlfilled);
   else 
     this.setHtml(this._htmlregular);
 }
});