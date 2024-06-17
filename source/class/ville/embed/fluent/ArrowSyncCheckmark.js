/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowSyncCheckmark",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M11.41 3.64a.5.5 0 0 0 0-.71L9.3.8a.5.5 0 0 0-.7.7l1 1a7.5 7.5 0 0 0-4.08 13.5.5.5 0 0 0 .6-.8A6.5 6.5 0 0 1 11.4 3.66l.01-.02ZM8.6 16.36l.01-.01c.41.09.83.14 1.27.15h-.01a6.48 6.48 0 0 0 4.74-1.9 6.5 6.5 0 0 0-.7-9.8.5.5 0 1 1 .6-.8 7.5 7.5 0 0 1-4.07 13.5l.98.98a.5.5 0 1 1-.7.71l-2.12-2.12a.5.5 0 0 1 0-.7Zm3.76-8.21c.2.2.2.5 0 .7l-3 3a.5.5 0 0 1-.7 0l-1.5-1.5a.5.5 0 0 1 .7-.7L9 10.79l2.65-2.64c.2-.2.5-.2.7 0ZM5 10a5 5 0 1 1 10 0 5 5 0 0 1-10 0Zm5-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z",
    FILLED : "M11.41 3.64a.5.5 0 0 0 0-.71L9.3.8a.5.5 0 0 0-.7.7l1 1a7.5 7.5 0 0 0-4.08 13.5.5.5 0 0 0 .6-.8A6.5 6.5 0 0 1 11.4 3.66l.01-.02ZM8.6 16.36l.01-.01c.41.09.83.14 1.27.15h-.01.07A6.5 6.5 0 0 0 13.9 4.8a.5.5 0 1 1 .6-.8 7.5 7.5 0 0 1-4.07 13.5l1 .98a.5.5 0 1 1-.71.71l-2.12-2.12a.5.5 0 0 1 0-.7ZM15 10a5 5 0 1 1-10 0 5 5 0 0 1 10 0Zm-2.65-1.85a.5.5 0 0 0-.7 0L9 10.79 7.85 9.65a.5.5 0 1 0-.7.7l1.5 1.5c.2.2.5.2.7 0l3-3a.5.5 0 0 0 0-.7Z"
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