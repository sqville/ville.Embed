/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BookNumber",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M7 7.5c0-.27.22-.5.5-.5h1.29l.22-1.1a.5.5 0 0 1 .98.2l-.18.9h.98l.22-1.1a.5.5 0 0 1 .98.2l-.18.9h.94a.5.5 0 0 1 0 1h-1.14l-.2 1h1.1a.5.5 0 1 1 0 1h-1.3L11 11.1a.5.5 0 0 1-.98-.2l.18-.9h-.98l-.22 1.1a.5.5 0 1 1-.98-.2l.18-.9h-.94a.5.5 0 0 1 0-1H8.4l.2-1H7.5a.5.5 0 0 1-.5-.5ZM10.4 9l.2-1H9.6l-.2 1h.98ZM6 2h8a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.5.5H5a1 1 0 0 0 1 1h9.5a.5.5 0 0 1 0 1H6a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2ZM5 15h10V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v11Z",
    FILLED : "M9.61 8h.98l-.2 1h-.98l.2-1ZM6 2a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9.5a.5.5 0 1 0 0-1H6a1 1 0 0 1-1-1h10.5a.5.5 0 0 0 .5-.5V4a2 2 0 0 0-2-2H6Zm5.6 3.51a.5.5 0 0 1 .4.59l-.19.9h.94a.5.5 0 0 1 0 1h-1.14l-.2 1h1.1a.5.5 0 1 1 0 1h-1.3L11 11.1a.5.5 0 0 1-.98-.2l.18-.9h-.98l-.22 1.1a.5.5 0 1 1-.98-.2l.18-.9h-.94a.5.5 0 0 1 0-1H8.4l.2-1H7.5a.5.5 0 0 1 0-1h1.29l.22-1.1a.5.5 0 0 1 .98.2l-.18.9h.98l.22-1.1a.5.5 0 0 1 .59-.39Z"
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