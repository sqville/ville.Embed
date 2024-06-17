/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.MountainLocationTop",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "m10.99 5.24-.25.36a.9.9 0 0 1-1.5-.04c-.09-.1-.16-.23-.24-.35C8.5 4.45 8 3.55 8 3a2 2 0 1 1 4 0c0 .55-.5 1.45-1 2.21l-.01.03ZM11 3a1 1 0 1 0-2 0 1 1 0 0 0 2 0ZM8.43 6.17l-.25-.38-5.36 5.64A3 3 0 0 0 2 13.5V15c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2v-1.5a3 3 0 0 0-.82-2.07L11.82 5.8l-.25.38c-.11.16-.24.3-.38.4l2.27 2.4c-1.27.07-2.3.54-3.2.95l-.7.3c-.66.27-1.26.44-1.92.4a4.07 4.07 0 0 1-1.96-.75l3.13-3.3a1.95 1.95 0 0 1-.38-.4ZM5 10.61c.94.65 1.78.95 2.58 1 .88.07 1.65-.17 2.37-.46.28-.11.54-.23.8-.35 1.14-.5 2.21-.99 3.7-.8l2.01 2.12A2 2 0 0 1 17 13.5V15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1.5c0-.51.2-1 .55-1.38l1.44-1.51Z",
    FILLED : "m10.99 5.24-.25.36a.9.9 0 0 1-1.5-.04c-.09-.1-.16-.23-.24-.35C8.5 4.45 8 3.55 8 3a2 2 0 1 1 4 0c0 .55-.5 1.45-1 2.21l-.01.03ZM11 3a1 1 0 1 0-2 0 1 1 0 0 0 2 0ZM8.43 6.17l-.25-.38-5.36 5.64A3 3 0 0 0 2 13.5V15c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2v-1.5a3 3 0 0 0-.82-2.07L11.82 5.8l-.25.38c-.11.16-.24.3-.38.4l2.27 2.4c-1.27.07-2.3.54-3.2.95l-.7.3c-.66.27-1.26.44-1.92.4a4.07 4.07 0 0 1-1.96-.75l3.13-3.3a1.95 1.95 0 0 1-.38-.4Z"
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