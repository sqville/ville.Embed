/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.AlertOn",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M1.8 2.1a.5.5 0 1 0-.6.8l2 1.5a.5.5 0 1 0 .6-.8l-2-1.5ZM1 7a.5.5 0 0 0 0 1h1.5a.5.5 0 0 0 0-1H1Zm9-5a5.92 5.92 0 0 1 5.98 5.35l.02.23V11.4l.92 2.22a1 1 0 0 1 .06.17l.01.08.01.13a1 1 0 0 1-.75.97l-.11.02L16 15h-3.5v.16a2.5 2.5 0 0 1-5 0V15H4a1 1 0 0 1-.26-.03l-.13-.04a1 1 0 0 1-.6-1.05l.02-.13.05-.13L4 11.4V7.57A5.9 5.9 0 0 1 10 2Zm1.5 13h-3v.14a1.5 1.5 0 0 0 1.36 1.35l.14.01c.78 0 1.42-.6 1.5-1.36V15ZM10 3a4.9 4.9 0 0 0-4.98 4.38L5 7.6V11.5l-.04.2L4 14h12l-.96-2.3-.04-.2V7.61A4.9 4.9 0 0 0 10 3Zm8.9-.8a.5.5 0 0 0-.7-.1l-2 1.5a.5.5 0 0 0 .6.8l2-1.5a.5.5 0 0 0 .1-.7Zm.6 5.3A.5.5 0 0 0 19 7h-1.5a.5.5 0 0 0 0 1H19a.5.5 0 0 0 .5-.5Z",
    FILLED : "M1.8 2.1a.5.5 0 1 0-.6.8l2 1.5a.5.5 0 1 0 .6-.8l-2-1.5ZM1 7a.5.5 0 0 0 0 1h1.5a.5.5 0 0 0 0-1H1Zm11.45 9a2.5 2.5 0 0 1-4.9 0h4.9ZM10 2a5.92 5.92 0 0 1 5.98 5.35l.02.23V11.4l.95 2.6.03.08.01.09v.08c0 .32-.19.6-.51.71l-.12.03-.11.01H3.75a.75.75 0 0 1-.74-.76v-.12l.04-.13.95-2.58V7.57A5.9 5.9 0 0 1 10 2Zm8.9.2a.5.5 0 0 0-.7-.1l-2 1.5a.5.5 0 0 0 .6.8l2-1.5a.5.5 0 0 0 .1-.7Zm.6 5.3A.5.5 0 0 0 19 7h-1.5a.5.5 0 0 0 0 1H19a.5.5 0 0 0 .5-.5Z"
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