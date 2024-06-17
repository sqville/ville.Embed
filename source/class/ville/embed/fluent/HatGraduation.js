/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.HatGraduation",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M8.5 3.4a3 3 0 0 1 3 0l7.25 4.17a.5.5 0 0 1 0 .86L16 10.01v4.49a.5.5 0 0 1-.15.35v.01l-.03.03a3.61 3.61 0 0 1-.38.32A9.1 9.1 0 0 1 10 17a9.1 9.1 0 0 1-5.74-2.05 3.56 3.56 0 0 1-.08-.07.53.53 0 0 1-.18-.4v-4.48L2 8.86v4.64a.5.5 0 0 1-1 0V8c0-.19.1-.35.26-.44L8.51 3.4Zm3 9.2a3 3 0 0 1-3 0L5 10.59v3.69l.17.14A8.1 8.1 0 0 0 10 16a8.1 8.1 0 0 0 5-1.72v-3.7l-3.5 2.02ZM11 4.27a2 2 0 0 0-2 0L2.5 8 9 11.73a2 2 0 0 0 2 0L17.5 8 11 4.27Z",
    FILLED : "M4 14.5v-3.34l4 2.3a4 4 0 0 0 4 0l4-2.3v3.34a.5.5 0 0 1-.15.35v.01l-.03.03a3.66 3.66 0 0 1-.38.32A9.1 9.1 0 0 1 10 17a9.1 9.1 0 0 1-5.74-2.05 3.6 3.6 0 0 1-.08-.07l-.02-.03A.51.51 0 0 1 4 14.5Zm14.75-6.07-7.26 4.17a3 3 0 0 1-2.98 0L2 8.86v4.64a.5.5 0 0 1-1 0V8c0-.2.1-.36.26-.44L8.51 3.4a3 3 0 0 1 2.98 0l7.26 4.17a.5.5 0 0 1 0 .86Z"
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