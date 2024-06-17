/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.SportBasketball",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "m10 9.3 1.08-1.09a7.57 7.57 0 0 1-1.06-1.96 17.37 17.37 0 0 1-.85-3.2 6.97 6.97 0 0 0-3.75 1.66L10 9.29Zm1.79-.38L10.71 10l4.58 4.58a6.97 6.97 0 0 0 1.66-3.75l-.42-.07c-.9-.18-1.88-.43-2.77-.78a7.57 7.57 0 0 1-1.97-1.06Zm5.2.9a6.97 6.97 0 0 0-1.7-4.4L12.5 8.2c.43.32.99.6 1.61.85a16.39 16.39 0 0 0 2.89.78ZM11.8 7.5l2.8-2.8A6.98 6.98 0 0 0 10.16 3l.06.27c.17.87.4 1.8.72 2.62.25.62.53 1.18.85 1.6ZM10 10.7 8.92 11.8c.44.55.79 1.25 1.06 1.96a17.37 17.37 0 0 1 .86 3.2 6.97 6.97 0 0 0 3.74-1.66L10 10.71Zm-1.8 1.8-2.78 2.8a6.97 6.97 0 0 0 4.4 1.7c0-.1-.03-.18-.04-.27-.18-.87-.41-1.8-.73-2.62a6.83 6.83 0 0 0-.84-1.6Zm-.7-.7c-.43-.33-.98-.6-1.61-.85A16.38 16.38 0 0 0 3 10.17c.04 1.58.61 3.15 1.7 4.41l2.8-2.79Zm.71-.72L9.3 10 4.71 5.42a6.97 6.97 0 0 0-1.66 3.74l.42.08c.9.18 1.88.43 2.78.78.72.28 1.4.62 1.96 1.06Zm7.45 4.58A8 8 0 1 1 4.34 4.34a8 8 0 0 1 11.32 11.32Z",
    FILLED : "M4.7 4A7.97 7.97 0 0 1 9 2.06c.07.43.14.91.24 1.4.18.9.43 1.89.78 2.79.28.71.62 1.4 1.06 1.96L10 9.3 4.7 4Zm-.7.7A7.97 7.97 0 0 0 2.06 9c.43.07.9.14 1.4.24.9.18 1.89.43 2.79.78.71.28 1.4.62 1.96 1.06L9.29 10 4 4.7Zm3.5 7.1c-.43-.32-.99-.6-1.61-.85-.83-.31-1.75-.55-2.62-.72-.45-.1-.88-.17-1.27-.22 0 2.02.76 3.87 2 5.28l3.5-3.5ZM4.7 16l3.5-3.5c.32.43.6.98.85 1.61.31.83.55 1.75.72 2.62.1.45.17.88.22 1.27a7.97 7.97 0 0 1-5.28-2Zm4.22-4.21L10 10.71 15.3 16a7.97 7.97 0 0 1-4.3 1.94c-.07-.43-.15-.91-.25-1.4-.18-.9-.43-1.89-.77-2.79a7.57 7.57 0 0 0-1.06-1.96Zm7.08 3.5a7.97 7.97 0 0 0 1.94-4.3 17.37 17.37 0 0 1-4.18-1.02 7.57 7.57 0 0 1-1.97-1.05L10.7 10 16 15.3ZM12.5 8.2c.43.33.98.6 1.61.85.83.32 1.75.55 2.62.72.45.1.88.17 1.27.22 0-2.02-.76-3.87-2-5.28l-3.5 3.5ZM15.3 4A7.97 7.97 0 0 0 10 2c.06.4.14.82.23 1.27.17.87.4 1.8.72 2.62.24.63.53 1.18.85 1.6L15.3 4Z"
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