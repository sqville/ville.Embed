/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.AlignStraighten",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M3.07 8.1a3 3 0 0 1 2.28-3.58l6.55-1.45a3 3 0 0 1 3.58 2.28l.7 3.15h-1.03l-.65-2.93a2 2 0 0 0-2.38-1.52L5.57 5.5a2 2 0 0 0-1.52 2.38l.13.62H3.16l-.09-.4Zm12.75 3.4h1.02l.09.4a3 3 0 0 1-2.28 3.58L8.1 16.93a3 3 0 0 1-3.58-2.28l-.7-3.15h1.03l.65 2.93a2 2 0 0 0 2.39 1.52l6.54-1.45a2 2 0 0 0 1.52-2.38l-.13-.62ZM1 10c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 1 10Zm5 0c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 6 10Zm5.5-.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm4.5.5c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Z",
    FILLED : "M5.35 4.52A3 3 0 0 0 3.07 8.1l.1.4h13l-.7-3.15a3 3 0 0 0-3.57-2.28L5.35 4.52Zm-.82 10.13-.7-3.15h13.01l.1.4a3 3 0 0 1-2.29 3.58L8.1 16.93a3 3 0 0 1-3.57-2.28ZM1 10c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 1 10Zm5 0c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 6 10Zm5.5-.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm4.5.5c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Z"
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