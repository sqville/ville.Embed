/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DocumentSplitHintOff",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M4 4.7v4.8a.5.5 0 0 0 1 0V5.7l10 10v.3a1 1 0 0 1-1 1h-.5a.5.5 0 0 0 0 1h.5a2 2 0 0 0 1.9-1.39l1.25 1.24a.5.5 0 0 0 .7-.7l-15-15a.5.5 0 1 0-.7.7L4 4.71Zm11 8.18.6.6A.5.5 0 0 0 16 13v-1a.5.5 0 0 0-1 0v.88ZM4.65 2.53l.7.7A1 1 0 0 1 6 3h4v3.5c0 .83.67 1.5 1.5 1.5H15v1.5a.5.5 0 0 0 1 0V7.41c0-.4-.16-.78-.44-1.06l-3.91-3.91A1.5 1.5 0 0 0 10.59 2H6a2 2 0 0 0-1.35.53ZM11 3.2 14.8 7h-3.3a.5.5 0 0 1-.5-.5V3.2ZM4.5 11.5c.28 0 .5.22.5.5v1a.5.5 0 0 1-1 0v-1c0-.28.22-.5.5-.5Zm0 3.5c.28 0 .5.22.5.5v.5a1 1 0 0 0 1 1h.5a.5.5 0 0 1 0 1H6a2 2 0 0 1-2-2v-.5c0-.28.22-.5.5-.5ZM9 18a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1H9Z",
    FILLED : "M4 4.7v4.8c0 .28.22.5.5.5h4.8l5.7 5.7v.3a1 1 0 0 1-1 1h-.5a.5.5 0 0 0 0 1h.5a2 2 0 0 0 1.9-1.39l1.25 1.24a.5.5 0 0 0 .7-.7l-15-15a.5.5 0 1 0-.7.7L4 4.71Zm11 8.18.6.6A.5.5 0 0 0 16 13v-1a.5.5 0 0 0-1 0v.88ZM4.5 2.38 12.12 10h3.38a.5.5 0 0 0 .5-.5V8h-4.5A1.5 1.5 0 0 1 10 6.5V2H5.5c-.38 0-.73.14-1 .38Zm6.5-.13V6.5c0 .28.22.5.5.5h4.25L11 2.25ZM5 12a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1Zm0 3.5a.5.5 0 0 0-1 0v.5c0 1.1.9 2 2 2h.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1v-.5Zm6 1.5H9a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1Z"
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