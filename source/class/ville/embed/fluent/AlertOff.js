/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.AlertOff",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M4 7.57c.04-.82.24-1.59.58-2.28L2.15 2.85a.5.5 0 1 1 .7-.7l15 15a.5.5 0 0 1-.7.7L14.3 15h-1.8v.17a2.5 2.5 0 0 1-5 0V15H4a1 1 0 0 1-.26-.03l-.13-.04a1 1 0 0 1-.6-1.05l.02-.13.05-.13L4 11.4V7.57ZM13.3 14 5.34 6.05a4.6 4.6 0 0 0-.32 1.33L5 7.6V11.5l-.04.2L4 14h9.3Zm-1.8 1h-3v.14a1.5 1.5 0 0 0 1.36 1.34l.14.01c.78 0 1.42-.6 1.5-1.36V15Zm3.54-3.32.87 2.1.86.85c.15-.17.23-.4.23-.64v-.13l-.02-.08a1 1 0 0 0-.06-.17L16 11.4V7.58l-.02-.22A5.92 5.92 0 0 0 10 2a6.1 6.1 0 0 0-4.21 1.66l.7.71A5.1 5.1 0 0 1 10 3a4.9 4.9 0 0 1 5 4.6l.01.21v3.69l.04.2Z",
    FILLED : "M4 7.57c.04-.82.24-1.59.58-2.28L2.15 2.85a.5.5 0 1 1 .7-.7l15 15a.5.5 0 0 1-.7.7L14.3 15H3.75a.75.75 0 0 1-.74-.76v-.12l.04-.12L4 11.4V7.57Zm13 6.68c0 .18-.06.34-.16.46L5.79 3.66A6.1 6.1 0 0 1 9.99 2a5.92 5.92 0 0 1 6 5.36v.22l.01.22v3.6l.95 2.6.03.08.01.09v.08ZM12.45 16a2.5 2.5 0 0 1-4.9 0h4.9Z"
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