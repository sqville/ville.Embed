/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.NavigationLocationTarget",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M2.5 5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-15Zm0 5a.5.5 0 0 0 0 1h10.2c.4-.32.84-.56 1.32-.73.01-.1.04-.18.07-.27H2.5Zm7.86 5.48a1.5 1.5 0 0 1-.27-.48H2.5a.5.5 0 0 0 0 1h8.77v-.02a1.5 1.5 0 0 1-.91-.5Zm5.14.02a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4-1.5h-.55A3.49 3.49 0 0 0 16 11.05v-.55a.5.5 0 0 0-1 0v.55A3.49 3.49 0 0 0 12.05 14h-.55a.5.5 0 0 0 0 1h.55A3.49 3.49 0 0 0 15 17.95v.55a.5.5 0 0 0 1 0v-.55A3.49 3.49 0 0 0 18.95 15h.55a.5.5 0 0 0 0-1Zm-2.23 2.27a2.5 2.5 0 1 1-3.54-3.54 2.5 2.5 0 0 1 3.54 3.54Z",
    FILLED : "M2.75 5a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5H2.75ZM2 10.75c0-.41.34-.75.75-.75h11.34a1.5 1.5 0 0 0-.07.27 4.47 4.47 0 0 0-1.85 1.23H2.75a.75.75 0 0 1-.75-.75ZM2.75 15h7.34a1.5 1.5 0 0 0 1.18.98c.06.18.13.35.22.52H2.75a.75.75 0 0 1 0-1.5Zm13.3.33a1 1 0 1 1-1.1-1.66 1 1 0 0 1 1.1 1.66Zm2.9-1.33h.55a.5.5 0 0 1 0 1h-.55A3.49 3.49 0 0 1 16 17.95v.55a.5.5 0 0 1-1 0v-.55A3.49 3.49 0 0 1 12.05 15h-.55a.5.5 0 0 1 0-1h.55A3.49 3.49 0 0 1 15 11.05v-.55a.5.5 0 0 1 1 0v.55A3.49 3.49 0 0 1 18.95 14Zm-3.2 2.99a2.5 2.5 0 1 0-.5-4.98 2.5 2.5 0 0 0 .5 4.98Z"
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