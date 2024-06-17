/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Airplane",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M8.78 8.29 8.1 2.81a1.16 1.16 0 0 1 1-1.3h.08l.17-.01c.6 0 1.13.35 1.37.9l2.51 5.74 2.75-.09c1.03-.03 1.9.73 2 1.74l.02.15V10c0 1.08-.87 1.95-1.96 1.95l-2.8-.1-2.52 5.75c-.24.55-.78.9-1.37.9h-.1a1.16 1.16 0 0 1-1.15-1.3l.68-5.5-2.14-.06-.96 1.67c-.24.43-.7.69-1.18.69a1 1 0 0 1-1-1v-1.47h-.16a1.53 1.53 0 0 1 0-3.05l.16-.01V7a1 1 0 0 1 1-1c.49 0 .94.26 1.18.69l.96 1.67 2.14-.07Zm.57-5.79h-.12a.16.16 0 0 0-.14.18l.82 6.57-3.84.13-1.26-2.2A.36.36 0 0 0 4.5 7v2.43l-.98.04a.53.53 0 0 0 0 1.06l.98.04V13h.08c.1-.03.18-.1.23-.18l1.26-2.2 3.84.13-.82 6.59c0 .09.07.16.16.16h.1a.5.5 0 0 0 .45-.3l2.79-6.36 3.46.11c.52 0 .95-.42.95-.95v-.03a.95.95 0 0 0-.98-.92l-3.43.11L9.8 2.8a.5.5 0 0 0-.45-.3Z",
    FILLED : "M9 2c.6 0 1.16.36 1.4.92l2.37 5.4 3.23-.2a1.88 1.88 0 0 1 2 1.76V10c0 1.04-.84 1.88-1.88 1.88H16l-3.23-.2-2.37 5.4c-.24.56-.8.92-1.4.92a.88.88 0 0 1-.88-.88v-.06l.7-5.63-2.46-.16-1.14 2.28a.8.8 0 0 1-.72.45.5.5 0 0 1-.5-.5v-2.38l-1.06-.06a1 1 0 0 1-.94-1v-.12a1 1 0 0 1 .94-1L4 8.88V6.5c0-.28.22-.5.5-.5.3 0 .59.17.72.45l1.14 2.28 2.46-.16L8.12 3A.88.88 0 0 1 9 2Z"
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