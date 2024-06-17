/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowRepeat1",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M16.5 6.67a.5.5 0 0 1 .3.1l.08.07.01.02a4.98 4.98 0 0 1 1.08 3.72c-.31-.15-.64-.28-.98-.37a4 4 0 0 0-.88-2.73.5.5 0 0 1 .39-.81ZM10.2 14c-.08.32-.15.66-.18 1H6.7l1.65 1.65c.18.17.2.44.06.63l-.06.07a.5.5 0 0 1-.63.06l-.07-.06-2.5-2.5a.5.5 0 0 1-.06-.63l.06-.07 2.5-2.5a.5.5 0 0 1 .76.63l-.06.07L6.72 14h.14L7 14h3.2Zm1.45-11.35a.5.5 0 0 1 .63-.06l.07.06 2.5 2.5.06.07a.5.5 0 0 1 0 .56l-.06.07-2.5 2.5-.07.06a.5.5 0 0 1-.56 0l-.07-.06-.06-.07a.5.5 0 0 1 0-.56l.06-.07L13.28 6h-.14L13 6H7a4 4 0 0 0-3.1 6.52c.06.09.1.2.1.31a.5.5 0 0 1-.9.3A4.99 4.99 0 0 1 6.77 5h6.52l-1.65-1.65-.06-.07a.5.5 0 0 1 .06-.63ZM20 15.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-3.95-2.66a.62.62 0 0 0-.68.23c-.21.3-.58.73-1.1.98a.5.5 0 1 0 .45.9c.3-.15.56-.34.78-.53v3.08a.5.5 0 0 0 1 0v-4.08a.61.61 0 0 0-.45-.58Z",
    FILLED : "M15.75 6.01c.18 0 .35.06.48.17a4.98 4.98 0 0 1 1.74 4.4c-.46-.23-.95-.4-1.47-.49V10a3.5 3.5 0 0 0-1.26-2.69.75.75 0 0 1 .5-1.3Zm-5.38 7.49c-.18.47-.3.98-.35 1.5H8.56l1.22 1.22c.27.27.3.68.08.98l-.08.08a.75.75 0 0 1-.97.07l-.09-.07-2.5-2.5a.75.75 0 0 1-.07-.98l.07-.08 2.5-2.5a.75.75 0 0 1 1.14.98l-.08.08-1.22 1.22h1.81Zm-.15-10.78a.75.75 0 0 1 .98-.07l.08.07 2.5 2.5.08.08c.19.26.2.62 0 .89l-.08.09-2.5 2.5-.08.07c-.26.2-.62.2-.88.01l-.1-.08-.07-.08a.75.75 0 0 1 0-.89l.07-.09 1.22-1.22H7a3.5 3.5 0 0 0-3.5 3.3v.2c0 1.08.5 2.05 1.26 2.7.15.13.24.32.24.54a.75.75 0 0 1-1.25.56A5 5 0 0 1 6.78 5h4.66l-1.22-1.22-.07-.08a.75.75 0 0 1 .07-.98ZM20 15.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-3.95-2.66a.62.62 0 0 0-.68.23c-.21.3-.58.73-1.1.98a.5.5 0 1 0 .45.9c.3-.15.56-.34.78-.53v3.08a.5.5 0 0 0 1 0v-4.08a.61.61 0 0 0-.45-.58Z"
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