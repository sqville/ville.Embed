/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Pin",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10.12 3.14a2 2 0 0 1 3.2-.52l4.06 4.05a2 2 0 0 1-.52 3.2l-3.46 1.74a1.5 1.5 0 0 0-.72.78L11.25 16a1 1 0 0 1-1.64.33L7 13.7 3.7 17H3v-.7L6.3 13l-2.62-2.61a1 1 0 0 1 .34-1.64L7.6 7.32c.34-.14.62-.4.78-.72l1.73-3.46Zm2.5.18a1 1 0 0 0-1.6.26L9.29 7.04a2.5 2.5 0 0 1-1.31 1.2L4.39 9.69l5.93 5.93 1.43-3.59a2.5 2.5 0 0 1 1.2-1.3l3.46-1.74a1 1 0 0 0 .26-1.6l-4.05-4.06Z",
    FILLED : "M13.33 2.62a2 2 0 0 0-3.2.52L8.38 6.6a1.5 1.5 0 0 1-.78.72L4 8.75a1 1 0 0 0-.33 1.64l2.61 2.6L3 16.3v.7h.7L7 13.72l2.61 2.6a1 1 0 0 0 1.64-.33l1.43-3.59c.14-.34.4-.62.72-.78l3.46-1.73a2 2 0 0 0 .52-3.2l-4.05-4.06Z"
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