/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.HatGraduationAdd",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M19 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V5h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V6h1.5a.5.5 0 0 0 0-1H15V3.5Zm0 10.78v-3.3c.34-.03.68-.1 1-.19v3.71a.5.5 0 0 1-.15.35v.01l-.03.03a3.66 3.66 0 0 1-.38.32A9.09 9.09 0 0 1 10 17a9.09 9.09 0 0 1-5.74-2.05 3.6 3.6 0 0 1-.08-.07.53.53 0 0 1-.18-.39v-4.49L2 8.86v4.64a.5.5 0 0 1-1 0V8c0-.19.1-.35.26-.44L8.51 3.4a3 3 0 0 1 1.07-.37c-.18.37-.32.75-.42 1.16a2 2 0 0 0-.16.08L2.5 8 9 11.73a2 2 0 0 0 2 0l1.76-1.01c.48.16 1 .26 1.53.28l-2.8 1.6a3 3 0 0 1-2.98 0L5 10.59v3.69l.17.14A8.1 8.1 0 0 0 10 16a8.1 8.1 0 0 0 5-1.72Z",
    FILLED : "M19 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V5h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V6h1.5a.5.5 0 0 0 0-1H15V3.5Zm-3.5 9.1 2.79-1.6a5.5 5.5 0 0 1-4.7-7.97 3 3 0 0 0-1.08.37L1.26 7.56A.5.5 0 0 0 1 8v5.5a.5.5 0 1 0 1 0V8.86l6.5 3.74a3 3 0 0 0 3 0ZM4 14.5v-3.34l4 2.3a4 4 0 0 0 4 0l4-2.3v3.34a.5.5 0 0 1-.15.35v.01l-.03.03a3.88 3.88 0 0 1-.38.32A9.1 9.1 0 0 1 10 17a9.1 9.1 0 0 1-5.74-2.05 3.81 3.81 0 0 1-.08-.07l-.02-.03A.51.51 0 0 1 4 14.5Z"
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