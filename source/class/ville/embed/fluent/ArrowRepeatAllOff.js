/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowRepeatAllOff",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M2.15 2.15a.5.5 0 0 1 .63-.06l.07.06 15 15 .06.07a.5.5 0 0 1-.7.7l-.06-.07-3-2.98a5 5 0 0 1-.85.12L13 15H6.7l1.65 1.65c.18.17.2.44.06.63l-.06.07a.5.5 0 0 1-.63.06l-.07-.06-2.5-2.5a.5.5 0 0 1-.06-.63l.06-.07 2.5-2.5a.5.5 0 0 1 .76.63l-.06.07L6.72 14h.14L7 14h6l.28-.01-7.72-7.72a4 4 0 0 0-1.66 6.25c.06.09.1.2.1.31a.5.5 0 0 1-.9.3A4.99 4.99 0 0 1 4.8 5.5L2.15 2.85l-.06-.07a.5.5 0 0 1 .06-.63ZM16.5 6.67a.5.5 0 0 1 .3.1l.08.07.01.02a4.98 4.98 0 0 1-.83 7.1l-.71-.72a4 4 0 0 0 .76-5.76.5.5 0 0 1 .39-.81ZM12.28 2.6l.07.06 2.5 2.5c.18.17.2.44.06.63l-.06.07-2.5 2.5a.5.5 0 0 1-.76-.63l.06-.07L13.28 6h-.14L13 6H8.1l-1-1h6.2l-1.65-1.65a.5.5 0 0 1-.06-.63l.06-.07a.5.5 0 0 1 .63-.06Z",
    FILLED : "M2.22 2.22a.75.75 0 0 1 .98-.07l.08.07 14.5 14.5.07.08a.75.75 0 0 1-1.05 1.05l-.08-.07-2.86-2.85c-.18.03-.37.05-.57.06L13 15H8.56l1.22 1.22c.27.27.3.68.07.98l-.07.08a.75.75 0 0 1-.98.07l-.08-.07-2.5-2.5a.75.75 0 0 1-.07-.98l.07-.08 2.5-2.5a.75.75 0 0 1 1.13.98l-.07.08-1.22 1.22h3.88L5.69 6.75A3.5 3.5 0 0 0 3.5 9.81V10c0 1.08.49 2.05 1.26 2.7.15.13.24.32.24.54a.75.75 0 0 1-1.25.56 4.98 4.98 0 0 1 .82-8.17L2.22 3.28l-.07-.08a.75.75 0 0 1 .07-.98Zm13.53 3.79c.18 0 .34.06.47.17a4.98 4.98 0 0 1 .03 7.62l-1.06-1.07a3.5 3.5 0 0 0 .05-5.42.75.75 0 0 1 .5-1.3Zm-5.53-3.3a.75.75 0 0 1 .98-.06l.08.07 2.5 2.5.07.08c.2.26.2.62.01.89l-.08.09-2.5 2.5-.02.02-1.06-1.06.02-.02 1.22-1.22H8.95L7.45 5h3.99l-1.22-1.22-.07-.08a.75.75 0 0 1 .07-.98Z"
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