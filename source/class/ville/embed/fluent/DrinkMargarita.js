/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DrinkMargarita",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M16.1 2.99a.5.5 0 0 0-.2-.98l-4.5 1a.5.5 0 0 0-.38.37l-.29 1.12H4.5A.5.5 0 0 0 4 5v3.5A2.5 2.5 0 0 0 6.5 11H7v.5a3 3 0 0 0 2.5 2.96V17h-2a.5.5 0 0 0 0 1h5a.5.5 0 1 0 0-1h-2v-2.54A3 3 0 0 0 13 11.5V11h.5A2.5 2.5 0 0 0 16 8.5V5a.5.5 0 0 0-.5-.5h-3.73l.14-.58 4.2-.93ZM10.49 5.5 10.11 7H5V5.5h5.48ZM5 8h4.86l-.84 3.38a.5.5 0 0 0 .97.24l.9-3.62H15v.5c0 .83-.67 1.5-1.5 1.5h-1a.5.5 0 0 0-.5.5v1a2 2 0 1 1-4 0v-1a.5.5 0 0 0-.5-.5h-1A1.5 1.5 0 0 1 5 8.5V8Zm10-1h-3.86l.38-1.5H15V7Z",
    FILLED : "M16.1 2.99a.5.5 0 0 0-.2-.98l-4.5 1a.5.5 0 0 0-.38.37l-.29 1.12H4.5A.5.5 0 0 0 4 5v3.5A2.5 2.5 0 0 0 6.5 11H7v.5a3 3 0 0 0 2.5 2.96V17h-2a.5.5 0 0 0 0 1h5a.5.5 0 1 0 0-1h-2v-2.54A3 3 0 0 0 13 11.5V11h.5A2.5 2.5 0 0 0 16 8.5V5a.5.5 0 0 0-.5-.5h-3.73l.14-.58 4.2-.93ZM10.49 5.5 10.11 7H5V5.5h5.48ZM15 7h-3.86l.38-1.5H15V7Z"
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