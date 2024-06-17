/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.AirplaneTakeOff",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M14.5 4c-1.41-.01-2.63.96-3.2 1.49-.23.21-.48.38-.74.46l-.41.14L7.5 4.28a1.6 1.6 0 0 0-2.17 2.3l.7.88-1.28.43-.6-1.23C3.65 5.57 2 5.95 2 7.16v2.99c0 1.2 1.18 2.04 2.32 1.65l3.02-1.04-.3 1.46c-.3 1.56 1.7 2.47 2.66 1.21l3.1-4 4.18-1.35c.84-.27 1.33-1.28.74-2.1-.6-.8-1.7-1.97-3.22-1.98ZM7.04 7.13l-.9-1.17a.6.6 0 0 1 .8-.86L8.96 6.5l-1.92.64Zm4.94-.91c.55-.51 1.51-1.23 2.52-1.22 1 0 1.85.8 2.41 1.58.07.1.08.2.04.3-.04.1-.13.2-.28.25l-4.32 1.4a.5.5 0 0 0-.25.16l-3.19 4.13c-.32.42-.99.12-.88-.4l.29-1.47a1 1 0 0 0-1.3-1.14l-3.03 1.04c-.48.17-.99-.19-.99-.7V7.16c0-.05.02-.08.03-.1a.15.15 0 0 1 .08-.04l.1.01.06.07.78 1.62c.1.22.37.33.6.25l6.23-2.07c.43-.14.8-.4 1.1-.68ZM2.5 17a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-15Z",
    FILLED : "m11.68 5.16-.38.33c-.23.21-.48.38-.74.46L4.76 7.9l-.6-1.23a1.19 1.19 0 0 0-.24-.34c-.62-.6-1.74-.27-1.9.62L2 7.16v2.99c0 1.2 1.18 2.04 2.32 1.65l3.02-1.04-.3 1.46c-.3 1.56 1.7 2.47 2.66 1.21l3.1-4 4.18-1.35c.84-.27 1.33-1.28.74-2.1-.52-.7-1.43-1.68-2.67-1.92a2.98 2.98 0 0 0-.88-.04 4.9 4.9 0 0 0-2.5 1.14Zm-2.57.22L5.38 6.62l-.04-.05a1.6 1.6 0 0 1 2.17-2.29l1.6 1.1ZM2.5 17a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-15Z"
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