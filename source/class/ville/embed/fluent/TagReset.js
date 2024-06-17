/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TagReset",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M15 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9.7 2.58A2 2 0 0 1 11.13 2l4.89.03a2 2 0 0 1 1.99 2v4.95a2 2 0 0 1-.58 1.42l-.15.15a5 5 0 0 0-1.03-.4l.47-.46a1 1 0 0 0 .3-.7L17 4.02a1 1 0 0 0-1-1L11.12 3a1 1 0 0 0-.71.3L3.73 9.95a1 1 0 0 0 0 1.41l4.95 4.95a1 1 0 0 0 1.41 0l.07-.07a5 5 0 0 0 .37 1 2 2 0 0 1-2.56-.22l-4.95-4.95a2 2 0 0 1 0-2.83L9.7 2.58Zm3.15 7.27a.5.5 0 0 0-.7-.7l-2 2a.5.5 0 0 0 0 .7l2 2a.5.5 0 0 0 .7-.7L11.71 12H15a3 3 0 1 1-3 3 .5.5 0 1 0-1 0 4 4 0 1 0 4-4h-3.3l1.15-1.15Z",
    FILLED : "M16.02 2.04a2 2 0 0 1 1.99 2v4.94a2 2 0 0 1-.58 1.42l-.15.15A5 5 0 0 0 15 10h-1.09a1.5 1.5 0 0 0-2.47-1.56l-2 2a1.5 1.5 0 0 0 0 2.12l1.2 1.2A1.5 1.5 0 0 0 10 15a5 5 0 0 0 .54 2.25 2 2 0 0 1-2.57-.22l-4.95-4.95a2 2 0 0 1 0-2.83L9.7 2.6A2 2 0 0 1 11.13 2l4.89.04ZM13 6a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm-.15 3.85a.5.5 0 0 0-.7-.7l-2 2a.5.5 0 0 0 0 .7l2 2a.5.5 0 0 0 .7-.7L11.71 12H15a3 3 0 1 1-3 3 .5.5 0 1 0-1 0 4 4 0 1 0 4-4h-3.3l1.15-1.15Z"
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