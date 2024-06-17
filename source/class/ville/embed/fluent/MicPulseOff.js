/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.MicPulseOff",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M6 6.7V10a3 3 0 0 0 3.2 3c.12-.4.27-.76.46-1.11A2 2 0 0 1 7 10V7.7l3.98 4a4.5 4.5 0 0 0 6.37 6.29.5.5 0 0 0 .5-.84l-15-15a.5.5 0 1 0-.7.7L6 6.71Zm9.11 9.12-.15.37a.5.5 0 0 1-.93-.02l-.64-1.8-.22.5a.5.5 0 0 1-.46.3H12a.5.5 0 0 1 0-1h.38l.33-.76 2.4 2.4ZM11 5v3.88l.82.82.18-.1V5a3 3 0 0 0-5.84-.96l.84.84A2 2 0 0 1 11 5Zm7.56 11.44a4.5 4.5 0 0 0-6-6l6 6ZM4.5 10A4.5 4.5 0 0 0 9 14.5c0 .82.18 1.6.5 2.3v.7a.5.5 0 0 1-1 0v-2.02a5.5 5.5 0 0 1-5-5.48.5.5 0 0 1 1 0Z",
    FILLED : "M6 6.7V10a3 3 0 0 0 3.2 3c.22-.76.59-1.44 1.07-2.02l.71.71a4.5 4.5 0 0 0 6.37 6.29.5.5 0 0 0 .5-.83l-15-15a.5.5 0 1 0-.7.7L6 6.71Zm9.11 9.12-.15.37a.5.5 0 0 1-.93-.02l-.64-1.8-.22.5a.5.5 0 0 1-.46.3H12a.5.5 0 0 1 0-1h.38l.33-.76 2.4 2.4Zm3.45.62a4.5 4.5 0 0 0-6-6l6 6ZM6.16 4.04l5.66 5.66.18-.1V5a3 3 0 0 0-5.84-.96ZM4.5 10a.5.5 0 0 0-1 0 5.5 5.5 0 0 0 5 5.48v2.02a.5.5 0 0 0 1 0v-.7c-.32-.7-.5-1.48-.5-2.3A4.5 4.5 0 0 1 4.5 10Z"
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