/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CircleEraser",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M8.73 17.17c-.1-.1-.2-.22-.29-.35A7 7 0 0 1 10 3a7 7 0 0 1 6.82 5.44c.13.09.24.18.35.3l.8.8a8 8 0 1 0-8.43 8.44l-.8-.8Zm.7-.7a1.5 1.5 0 0 1 0-2.13l4.9-4.9a1.5 1.5 0 0 1 2.13 0l2.1 2.1a1.5 1.5 0 0 1 0 2.12L14.22 18h2.53a.5.5 0 0 1 0 1h-4.1a1.5 1.5 0 0 1-1.12-.44l-2.1-2.1Zm5.62-6.32-3.6 3.6 2.8 2.8 3.6-3.6a.5.5 0 0 0 0-.71l-2.1-2.1a.5.5 0 0 0-.7 0Zm-1.5 7.1-2.8-2.8-.6.6a.5.5 0 0 0 0 .71l2.1 2.1a.5.5 0 0 0 .7 0l.6-.6Z",
    FILLED : "M8.73 17.17a2.5 2.5 0 0 1 0-3.53l4.9-4.9a2.5 2.5 0 0 1 3.54 0l.8.8a8 8 0 1 0-8.44 8.44l-.8-.8Zm7.74-7.73 2.1 2.1a1.5 1.5 0 0 1 0 2.12l-3.6 3.6-4.22-4.22 3.6-3.6a1.5 1.5 0 0 1 2.12 0Zm-2.21 8.52-4.22-4.21-.6.6a1.5 1.5 0 0 0 0 2.12l2.1 2.1a1.5 1.5 0 0 0 1.12.43h4.09a.5.5 0 0 0 0-1h-2.53l.04-.04Z"
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