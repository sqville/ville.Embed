/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.LocalLanguage",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M9.5 2a.5.5 0 0 0 0 1H13v1.86C13 6.03 11.83 7 10.5 7a.5.5 0 0 0 0 1C12.21 8 14 6.74 14 4.86V2.5a.5.5 0 0 0-.5-.5h-4ZM7.96 5.3a.5.5 0 0 0-.92 0l-5 12a.5.5 0 1 0 .92.4L4.5 14h6l1.54 3.7a.5.5 0 1 0 .92-.39l-1.66-3.99v-.02l-3.34-8Zm2.12 7.7H4.92L7.5 6.8l2.58 6.2ZM15.5 2c.28 0 .5.22.5.5V6h1.5a.5.5 0 0 1 0 1H16v6.5a.5.5 0 1 1-1 0v-11c0-.28.23-.5.5-.5Z",
    FILLED : "M9.74 1.99a.75.75 0 1 0 0 1.5h2.76v1.26c0 .55-.2.98-.48 1.27-.29.29-.71.48-1.27.48a.75.75 0 0 0 0 1.5c.92 0 1.74-.32 2.33-.92.6-.6.92-1.42.92-2.33v-2a.75.75 0 0 0-.75-.75l-3.5-.01ZM8.2 5.46a.75.75 0 0 0-1.38 0l-3.3 7.98-.01.03-1.44 3.5a.75.75 0 0 0 1.38.57l1.26-3.05h5.6l1.26 3.04a.75.75 0 0 0 1.38-.57L8.2 5.46ZM9.7 13H5.31L7.5 7.71 9.68 13ZM15.74 2c.42 0 .75.34.75.75V6h.76a.75.75 0 0 1 0 1.5h-.76v5.75a.75.75 0 0 1-1.5 0V2.75c0-.41.34-.75.75-.75Z"
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